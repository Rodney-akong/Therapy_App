import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-600">
          WeCare
        </h1>

        <div className="space-x-6 text-gray-600">

          <Link to="/" className="hover:text-green-600">
            Home
          </Link>

          <Link to="/therapists" className="hover:text-green-600">
            Therapists
          </Link>

          <Link to="/login" className="hover:text-green-600">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}