import Navbar from "../components/Navbar";

export default function Signup() {

  return (
    <div className="min-h-screen bg-gray-600">

      <Navbar />

      <div className="flex justify-center items-center mt-20">

        <div className="bg-white p-10 rounded-xl shadow-md w-96">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <input
            placeholder="Full Name"
            className="w-full border p-3 mb-4 rounded-lg placeholder-black font-bold"
          />

          <input
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded-lg placeholder-black font-bold"
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full border p-3 mb-4 rounded-lg placeholder-black font-bold"
          />

          <button className="w-full bg-green-600 text-white py-3 rounded-lg">
            Sign Up
          </button>

        </div>

      </div>

    </div>
  );
}