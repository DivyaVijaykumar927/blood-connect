from pydantic import BaseModel


class RequestCreate(BaseModel):
    patient_name: str
    blood_type: str
    hospital: str
    city: str
    phone: str
    urgency: str
    message: str