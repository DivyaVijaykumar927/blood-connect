function RequestCard({ request }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold">
        {request.patient_name}
      </h2>

      <p className="mt-2">
        Blood Type:
        <span className="text-red-600 font-semibold ml-2">
          {request.blood_type}
        </span>
      </p>

      <p>Hospital: {request.hospital}</p>

      <p>City: {request.city}</p>

      <p className="text-red-600 font-semibold mt-2">
        {request.urgency}
      </p>

    </div>
  );
}

export default RequestCard;