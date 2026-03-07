import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import MoodTracker from "../components/MoodTracker";
import Journal from "../components/Journal";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-500">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-3xl font-bold mb-10 text-center">
          User Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8 ">

          <DashboardCard title="Upcoming Sessions" className="bg-black">
            Your next session is tomorrow at 10:00 AM
          </DashboardCard>

          <DashboardCard title="Mood Tracker">
            <MoodTracker />
          </DashboardCard>

          <DashboardCard title="Journal">
            <Journal />
          </DashboardCard>

        </div>

      </div>

    </div>
  );
}