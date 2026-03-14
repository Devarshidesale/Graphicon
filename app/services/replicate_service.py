import replicate
from app.config import REPLICATE_API_KEY

replicate_client = replicate.Client(api_token=REPLICATE_API_KEY)


def generate_video(prompt: str):

    output = replicate_client.run(
        "cjwbw/zeroscope-v2-xl:9f747673945c8c1c2a3bdb1f1c43b0df",
        input={
            "prompt": prompt,
            "num_frames": 24
        }
    )

    return {
        "video_url": output
    }