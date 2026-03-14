from openai import OpenAI
from app.config import OPENAI_API_KEY

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY is missing. Check your .env file.")

client = OpenAI(api_key=OPENAI_API_KEY)


def generate_dalle_images(prompt: str):

    response = client.images.generate(
        model="gpt-image-1",
        prompt=prompt,
        size="1024x1024",
        n=3
    )

    images = []

    for img in response.data:
        images.append({"image_url": img.url})

    return images