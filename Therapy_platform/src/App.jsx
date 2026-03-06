import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Therapists from "./pages/Therapists";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Find Therapists */}
        <Route path="/therapists" element={<Therapists />} />

        {/* Booking Page */}
        <Route path="/booking" element={<Booking />} />

      </Routes>

    </BrowserRouter>
  );
}