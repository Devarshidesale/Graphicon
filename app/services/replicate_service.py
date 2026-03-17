import replicate
from app.config import REPLICATE_API_KEY

replicate_client = replicate.Client(api_token=REPLICATE_API_KEY)


def generate_video(prompt: str):

    output = replicate_client.run(
        "stability-ai/stable-video-diffusion",
        input={
            "prompt": prompt
        }
    )

    if isinstance(output, list):
        video_url = output[0]
    else:
        video_url = output

    return {
        "video_url": video_url
    }