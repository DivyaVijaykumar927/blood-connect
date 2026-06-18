# BloodConnect

BloodConnect is a full-stack Blood Donation Management System that connects blood donors with patients in need.

## Features

* Register Blood Donors
* View Available Donors
* Create Blood Requests
* View Blood Requests
* Dashboard Statistics
* Azure Cloud Backup Integration
* REST API Documentation using Swagger

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* FastAPI
* SQLAlchemy
* SQLite

### Cloud Services

* Microsoft Azure Blob Storage

---

## Project Structure

```text
blood-connect/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── bloodconnect.db
│
└── README.md
```

---

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend

```bash
cd backend

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload

---

## Azure Integration

The project integrates Microsoft Azure Blob Storage to store application backups.

### Backup Workflow

1. Fetch donor data from SQLite
2. Fetch blood request data
3. Generate JSON backup
4. Upload backup to Azure Blob Storage
5. Return Blob URL

API Endpoint:

```http
POST /backup
```

Example Response:

```json
{
  "message": "Backup uploaded successfully",
  "blob_url": "https://<storage-account>.blob.core.windows.net/bloodconnect-data/backup.json"
}
```

---



## Future Enhancements

* Search Donors by City
* Blood Group Filters
* Authentication & Authorization
* Email Notifications
* Mobile Responsive Improvements

---
<img width="1766" height="891" alt="IMAGE_1" src="https://github.com/user-attachments/assets/9c5cdfa0-4552-4b58-80f2-05063b4303e5" />

## Author
Divya Vijaykumar
