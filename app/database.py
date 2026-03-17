import os

from dotenv import load_dotenv
load_dotenv()

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


DATABASE_CONNECTION = os.getenv("DB_CONNECTION")

engine = create_engine(
    DATABASE_CONNECTION,
    connect_args={"sslmode": "require"}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

print("DATABASE_CONNECTION:", DATABASE_CONNECTION)