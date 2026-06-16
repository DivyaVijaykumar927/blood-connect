from sqlalchemy import Column, Integer, String, Boolean
from app.database import Base


class Donor(Base):
    __tablename__ = "donors"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    age = Column(Integer)

    blood_group = Column(String)

    city = Column(String)

    phone = Column(String)

    available = Column(Boolean, default=True)

    image_url = Column(String, nullable=True)