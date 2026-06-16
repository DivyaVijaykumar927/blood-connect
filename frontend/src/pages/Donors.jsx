import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import DonorCard from "../components/DonorCard";

import API from "../services/api";

function Donors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    API.get("/donors")
      .then((response) => {
        setDonors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-5xl font-bold mb-8">
          Blood Donors
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {donors.map((donor) => (
            <DonorCard
              key={donor.id}
              donor={donor}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Donors;