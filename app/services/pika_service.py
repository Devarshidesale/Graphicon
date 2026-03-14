import requests
from app.config import PIKA_API_KEY, PIKA_BASE_URL


def generate_pika_video(video_prompt: str):

    if not PIKA_API_KEY:
        raise ValueError("PIKA_API_KEY missing in .env")

    url = f"{PIKA_BASE_URL}/v1/video/generate"

    headers = {
        "Authorization": f"Bearer {PIKA_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "prompt": video_prompt,
        "duration": 5,
        "resolution": "720p",
        "fps": 24
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code != 200:
        raise Exception(f"Pika API Error: {response.text}")

    data = response.json()

    return {
        "video_url": data.get("video_url"),
        "status": data.get("status", "generated")
    }