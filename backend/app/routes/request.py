from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.request import BloodRequest
from app.schemas.request import RequestCreate

router = APIRouter()


@router.post("/requests")
def create_request(
    request: RequestCreate,
    db: Session = Depends(get_db)
):

    new_request = BloodRequest(
        patient_name=request.patient_name,
        blood_type=request.blood_type,
        hospital=request.hospital,
        city=request.city,
        phone=request.phone,
        urgency=request.urgency,
        message=request.message
    )

    db.add(new_request)
    db.commit()
    db.refresh(new_request)

    return new_request


@router.get("/requests")
def get_requests(
    db: Session = Depends(get_db)
):
    return db.query(BloodRequest).all()