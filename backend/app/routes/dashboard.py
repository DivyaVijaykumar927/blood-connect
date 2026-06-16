from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.donor import Donor
from app.models.request import BloodRequest

router = APIRouter()


@router.get("/dashboard")
def get_dashboard_stats(
    db: Session = Depends(get_db)
):

    total_donors = db.query(Donor).count()

    available_donors = db.query(Donor).filter(
        Donor.available == True
    ).count()

    open_requests = db.query(BloodRequest).count()

    return {
        "total_donors": total_donors,
        "available_donors": available_donors,
        "open_requests": open_requests
    }