import os
from dotenv import load_dotenv
from pathlib import Path

env_path = Path(__file__).resolve().parent.parent / ".env"

load_dotenv(dotenv_path=env_path)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
PIKA_API_KEY = os.getenv("PIKA_API_KEY")
PIKA_BASE_URL = os.getenv("PIKA_BASE_URL")