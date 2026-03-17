from httpcore import request
from fastapi import APIRouter
import asyncio
from app.models.campaign_model import Campaign
from app.schemas.campaign_schema import CampaignRequest
from app.services.groq_service import generate_campaign_content
from app.services.hf_service import generate_sd_images
from app.services.replicate_service import generate_video
from app.database import SessionLocal

router = APIRouter()

@router.post("/campaign/generate")
async def generate_campaign(request: CampaignRequest):
    gemini_output = generate_campaign_content(
        request.campaign_prompt,
        request.platform
    )

    linkedin = gemini_output["linkedin"]
    instagram = gemini_output["instagram"]
    twitter = gemini_output["twitter"]
    
    hashtags = gemini_output["hashtags"]
    image_prompt = gemini_output["image_prompt"]
    video_prompt = gemini_output["video_prompt"]

    tasks = []

    if request.generate_images:
        tasks.append(asyncio.to_thread(generate_sd_images, linkedin["image_prompt"]))
        tasks.append(asyncio.to_thread(generate_sd_images, instagram["image_prompt"]))
        tasks.append(asyncio.to_thread(generate_sd_images, twitter["image_prompt"]))

    if request.generate_video:
        tasks.append(asyncio.to_thread(generate_video, video_prompt))

    results = await asyncio.gather(*tasks, return_exceptions=True)

    images, video = None, None

    idx = 0
    if request.generate_images:
        images = results[idx] if not isinstance(results[idx], Exception) else {"error": str(results[idx])}
        idx += 1

    if request.generate_video:
        video = results[idx] if not isinstance(results[idx], Exception) else {"error": str(results[idx])}
        
    db = SessionLocal()

    db_campaign = Campaign(
        prompt=request.campaign_prompt,
        platform=request.platform,
        caption={
            linkedin["caption"], 
            instagram["caption"], 
            twitter["caption"]
        },
        hashtags=linkedin["hashtags"],
        images=images,
        video=video
    )

    db.add(db_campaign)
    db.commit()
    db.close()

    return {
    "linkedin": {
        "caption": linkedin["caption"],
        "hashtags": linkedin["hashtags"],
        "images": images if request.generate_images else None
    },
    "instagram": {
        "caption": instagram["caption"],
        "hashtags": instagram["hashtags"],
        "images": images if request.generate_images else None
    },
    "twitter": {
        "caption": twitter["caption"],
        "hashtags": twitter["hashtags"],
        "images": images if request.generate_images else None
    }
}
    
@router.get("/campaigns")
async def get_campaigns():
    db = SessionLocal()
    campaigns = db.query(Campaign).all()
    db.close()
    return campaigns