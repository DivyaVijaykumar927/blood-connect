import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 shadow-sm border-b">

      <h1 className="text-3xl font-bold text-red-600">
        BloodConnect
      </h1>

      <div className="flex gap-8 text-lg">
        <Link to="/">Home</Link>
        <Link to="/donors">Donors</Link>
        <Link to="/requests">Requests</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/post-request">
  <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
    Post Request
  </button>
</Link>

        <Link to="/register-donor">
  <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg">
    Register Donor
  </button>
</Link>
      </div>  

    </nav>
  );
}

export default Navbar;