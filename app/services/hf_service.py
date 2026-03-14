import requests
import base64
from app.config import HF_API_KEY

# print("HF KEY LOADED:", HF_API_KEY)
def generate_sd_images(prompt: str):

    url = "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0"

    headers = {
        "Authorization": f"Bearer {HF_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "inputs": prompt
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code != 200:
        raise Exception(f"HuggingFace API Error: {response.text}")

    image_bytes = response.content

    image_base64 = base64.b64encode(image_bytes).decode()

    return [{
        "image_base64": image_base64
    }]