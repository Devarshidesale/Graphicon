from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.campaign_routes import router as campaign_router

from app.database import Base, engine
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Automatic Image Generation for Social Media", description="An API for generating images based on user input for social media posts.")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(campaign_router)

@app.get("/health")
def health_check():
    return {"status": "ok"}


