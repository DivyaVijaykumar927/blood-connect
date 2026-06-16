from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.donor import Donor
from app.schemas.donor import DonorCreate

router = APIRouter()


@router.post("/donors")
def create_donor(
    donor: DonorCreate,
    db: Session = Depends(get_db)
):

    new_donor = Donor(
        name=donor.name,
        age=donor.age,
        blood_group=donor.blood_group,
        city=donor.city,
        phone=donor.phone
    )

    db.add(new_donor)
    db.commit()
    db.refresh(new_donor)

    return new_donor


@router.get("/donors")
def get_donors(
    db: Session = Depends(get_db)
):
    donors = db.query(Donor).all()
    return donors