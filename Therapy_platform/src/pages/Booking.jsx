import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Booking() {

  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM"
  ];

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time first.");
      return;
    }

    alert(`Session booked for ${selectedTime}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl font-bold mb-10">
          Book a Therapy Session
        </h1>

        {/* Therapist Info */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">

          <h2 className="text-xl font-semibold">
            Dr. Sarah Johnson
          </h2>

          <p className="text-gray-500">
            Anxiety & Stress Specialist
          </p>

          <p className="text-blue-600 font-semibold mt-2">
            $50 / session
          </p>

        </div>

        {/* Time Slots */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-6">
            Select a Time
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {times.map((time, index) => (

              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`p-3 border rounded-lg transition
                  ${selectedTime === time
                    ? "bg-blue-600 text-white border-blue-600"
                    : "hover:bg-gray-100"
                  }`}
              >
                {time}
              </button>

            ))}

          </div>

          {/* Book Button */}
          <button
            onClick={handleBooking}
            className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>

        </div>

      </div>

    </div>
  );
}