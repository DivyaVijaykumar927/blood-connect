import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";

import API from "../services/api";

function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get("/requests")
      .then((response) => {
        setRequests(response.data);
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
          Blood Requests
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {requests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Requests;