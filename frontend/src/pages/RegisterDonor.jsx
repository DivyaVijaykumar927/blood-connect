import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function RegisterDonor() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    blood_group: "",
    city: "",
    phone: "",
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
      await API.post("/donors", {
        ...formData,
        age: Number(formData.age),
      });

      alert("Donor Registered Successfully!");

      setFormData({
        name: "",
        age: "",
        blood_group: "",
        city: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to register donor");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register Donor
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="blood_group"
            placeholder="Blood Group (O+, A+, B+, etc.)"
            value={formData.blood_group}
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

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg"
          >
            Register Donor
          </button>

        </form>

      </div>
    </>
  );
}

export default RegisterDonor;