from pydantic import BaseModel


class DonorCreate(BaseModel):
    name: str
    age: int
    blood_group: str
    city: str
    phone: str