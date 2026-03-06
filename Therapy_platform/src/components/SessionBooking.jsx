export default function SessionBooking() {

  const times = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM"
  ];

  return (

    <div className="space-y-3">

      {times.map((time, index) => (

        <button
          key={index}
          className="w-full border p-3 rounded-lg hover:bg-blue-50"
        >
          {time}
        </button>

      ))}

    </div>

  );
}