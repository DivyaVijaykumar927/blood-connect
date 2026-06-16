function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-5xl font-bold text-red-600">
        {value}
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        {title}
      </p>
    </div>
  );
}

export default StatsCard;