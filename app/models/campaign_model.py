from sqlalchemy import Column, Integer, JSON, String
from app.database import Base

class Campaign(Base):
    __tablename__ = "campaigns"

    id = Column(Integer, primary_key=True, index=True)
    prompt = Column(String)
    linkedin = Column(JSON)
    instagram = Column(JSON)
    twitter = Column(JSON)
    caption = Column(String)
    hashtags = Column(JSON)
    images = Column(JSON)
    video = Column(JSON)