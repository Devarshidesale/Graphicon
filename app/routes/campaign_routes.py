from fastapi import APIRouter
from app.schemas.campaign_schema import CampaignRequest
from app.services.gemini_service import generate_campaign_content
from app.services.dalle_service import generate_dalle_images
from app.services.pika_service import generate_pika_video

router = APIRouter()

@router.post("/campaign/generate")
def generate_campaign(request: CampaignRequest):
    gemini_output = generate_campaign_content(
        request.campaign_prompt,
        request.platform
    )

    caption = gemini_output["caption"]
    hashtags = gemini_output["hashtags"]
    image_prompt = gemini_output["image_prompt"]
    video_prompt = gemini_output["video_prompt"]

    images = None
    video = None

    if request.generate_images:
        images = generate_dalle_images(image_prompt)

    if request.generate_video:
        video = generate_pika_video(video_prompt)

    return {
        "caption": caption,
        "hashtags": hashtags,
        "images": images,
        "video": video
    }