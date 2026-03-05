import Navbar from "../components/Navbar";

export default function Login() {

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="flex justify-center items-center mt-20">

        <div className="bg-white p-10 rounded-xl shadow-md w-96">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 mb-4 rounded-lg"
          />

          <button className="w-full bg-green-600 text-white py-3 rounded-lg">
            Login
          </button>

        </div>

      </div>

    </div>
  );
}