import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 shadow-md border-b border-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

         {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          WeCare
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-white">

          <Link to="/" className="hover:text-green-300 font-bold">
            Home
          </Link>

          <Link to="/therapists" className="hover:text-green-300 font-bold">
            Therapists
          </Link>

          <Link to="/login" className="hover:text-green-300 font-bold">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-gray-600 text-white px-4 py-0 rounded-lg font-bold hover:text-green-300"
          >
            Sign Up
          </Link>

          <Link to="/dashboard">
              <button className="bg-gray-600 text-green-300 px-6 py-0 rounded-lg font-bold hover:text-white">
                Dashboard
              </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}