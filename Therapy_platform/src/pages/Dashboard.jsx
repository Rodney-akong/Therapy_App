import Navbar from "../components/Navbar";

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-3xl font-bold mb-10">
          User Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            Upcoming Sessions
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Mood Journal
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Messages
          </div>

        </div>

      </div>

    </div>
  );
}