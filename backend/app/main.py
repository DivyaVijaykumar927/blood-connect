from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.models.donor import Donor
from app.models.request import BloodRequest

from app.routes.donor import router as donor_router
from app.routes.request import router as request_router
from app.routes.dashboard import router as dashboard_router
from app.routes.backup import router as backup_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(donor_router)
app.include_router(request_router)
app.include_router(dashboard_router)
app.include_router(backup_router)


@app.get("/")
def home():
    return {
        "message": "BloodConnect API Running"
    }