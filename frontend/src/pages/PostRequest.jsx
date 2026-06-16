import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function PostRequest() {
  const [formData, setFormData] = useState({
    patient_name: "",
    blood_type: "",
    hospital: "",
    city: "",
    phone: "",
    urgency: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/requests", formData);

      alert("Blood Request Posted Successfully!");

      setFormData({
        patient_name: "",
        blood_type: "",
        hospital: "",
        city: "",
        phone: "",
        urgency: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to post request");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Post Blood Request
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="patient_name"
            placeholder="Patient Name"
            value={formData.patient_name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="blood_type"
            placeholder="Blood Type"
            value={formData.blood_type}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="hospital"
            placeholder="Hospital Name"
            value={formData.hospital}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Urgency</option>
            <option value="Critical">Critical</option>
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg"
          >
            Post Request
          </button>

        </form>

      </div>
    </>
  );
}

export default PostRequest;