import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-50 min-h-screen">

      <Navbar />

      <section className="text-center py-32 px-6">

        <h1 className="text-5xl font-bold max-w-3xl mx-auto">
          You Don't Have To Go Through It Alone
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Secure online therapy anywhere in Nigeria
        </p>

        <div className="mt-8 space-x-4">

          <Link
            to="/signup"
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Start Therapy
          </Link>

          <Link
            to="/therapists"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-xl"
          >
            Browse Therapists
          </Link>

        </div>

      </section>

    </div>
  );
}