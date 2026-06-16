import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";

import API from "../services/api";

function Home() {
  const [stats, setStats] = useState({
    total_donors: 0,
    available_donors: 0,
    open_requests: 0,
  });

  useEffect(() => {
    API.get("/dashboard")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-24">
        <h1 className="text-7xl font-bold">
          Every Drop Counts
        </h1>

        <h2 className="text-4xl mt-6">
          Save Lives. Donate Blood.
        </h2>

        <p className="mt-6 text-lg">
          Connect with blood donors in your city,
          <br />
          or register to help someone in need.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold">
            Become a Donor
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold">
            Request Blood
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10 py-16 bg-gray-100">
        <StatsCard
          title="Total Donors"
          value={stats.total_donors}
        />

        <StatsCard
          title="Available Donors"
          value={stats.available_donors}
        />

        <StatsCard
          title="Open Requests"
          value={stats.open_requests}
        />
      </section>
    </>
  );
}

export default Home;