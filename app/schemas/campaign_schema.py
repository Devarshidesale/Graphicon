from pydantic import BaseModel

class CampaignRequest(BaseModel):
    campaign_prompt: str
    platform: str
    generate_caption: bool = True
    generate_images: bool = True
    generate_video: bool = False