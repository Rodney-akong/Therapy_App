import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <div className="bg-gray-600 min-h-screen">

      <Navbar />

      <section className="text-center py-32 px-6 bg-gray-600">

        <h1 className="text-5xl font-bold max-w-3xl mx-auto text-gray-200">
          You Don't Have To Go Through It Alone
        </h1>

        <p className="mt-6 text-black text-lg text-3xl font-bold" >
          Secure online therapy anywhere in Nigeria
        </p>

        <div className="mt-8 space-x-4">

          <Link
            to="/signup"
            className="bg-teal-300 text-black px-6 py-3 rounded-xl font-bold"
          >
            Start Therapy
          </Link>

          <Link
            to="/therapists"
            className="border border-white text-green-600 px-6 py-3 rounded-xl"
          >
            Browse Therapists
          </Link>

          <Link to="/booking">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                Book a Session
              </button>
          </Link>

          
        </div>



      </section>

    </div>
  );
}