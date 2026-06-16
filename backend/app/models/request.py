from sqlalchemy import Column, Integer, String
from app.database import Base


class BloodRequest(Base):
    __tablename__ = "requests"

    id = Column(Integer, primary_key=True, index=True)

    patient_name = Column(String)

    blood_type = Column(String)

    hospital = Column(String)

    city = Column(String)

    phone = Column(String)

    urgency = Column(String)

    message = Column(String)   