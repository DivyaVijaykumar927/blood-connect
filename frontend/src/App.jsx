import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Donors from "./pages/Donors";
import Requests from "./pages/Requests";
import RegisterDonor from "./pages/RegisterDonor";
import PostRequest from "./pages/PostRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/register-donor"element={<RegisterDonor />}/>
        <Route path="/post-request" element={<PostRequest />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;