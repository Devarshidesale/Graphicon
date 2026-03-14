import requests
from app.config import PIKA_API_KEY, PIKA_BASE_URL


def generate_pika_video(video_prompt: str):
    if not PIKA_API_KEY:
        raise ValueError("PIKA_API_KEY is missing. Check your .env file.")

    if not PIKA_BASE_URL:
        raise ValueError("PIKA_BASE_URL is missing. Check your .env file.")

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

    response = requests.post(url, headers=headers, json=payload, timeout=120)

    if response.status_code not in [200, 201]:
        raise Exception(f"Pika API Error: {response.text}")

    data = response.json()

    return {
        "video_url": data.get("video_url"),
        "status": data.get("status", "submitted"),
        "raw_response": data
    }