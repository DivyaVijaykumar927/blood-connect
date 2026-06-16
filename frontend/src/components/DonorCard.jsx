function DonorCard({ donor }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold">
        {donor.name}
      </h2>

      <p className="mt-2">
        Blood Group:
        <span className="text-red-600 font-semibold ml-2">
          {donor.blood_group}
        </span>
      </p>

      <p>City: {donor.city}</p>

      <p>Phone: {donor.phone}</p>

      <p className="mt-2 text-green-600 font-semibold">
        Available
      </p>

    </div>
  );
}

export default DonorCard;