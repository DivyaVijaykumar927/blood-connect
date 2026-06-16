from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.donor import Donor
from app.models.request import BloodRequest

from app.services.azure_blob import upload_backup

router = APIRouter()

@router.post("/backup")
def backup_data():

    db: Session = SessionLocal()

    donors = db.query(Donor).all()
    requests = db.query(BloodRequest).all()

    data = {
        "donors": [
            {
                "id": d.id,
                "name": d.name,
                "blood_group": d.blood_group,
                "city": d.city,
                "phone": d.phone
            }
            for d in donors
        ],
        "requests": [
            {
                "id": r.id,
                "patient_name": r.patient_name,
                "blood_type": r.blood_type,
                "hospital": r.hospital,
                "city": r.city
            }
            for r in requests
        ]
    }

    url = upload_backup(data)

    return {
        "message": "Backup uploaded successfully",
        "blob_url": url
    }