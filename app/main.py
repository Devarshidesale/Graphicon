from fastapi import FastAPI
from app.routes.campaign_routes import router as campaign_router

app = FastAPI(title="Automatic Image Generation for Social Media", description="An API for generating images based on user input for social media posts.")

app.include_router(campaign_router)

@app.get("/health")
def health_check():
    return {"status": "ok"}


