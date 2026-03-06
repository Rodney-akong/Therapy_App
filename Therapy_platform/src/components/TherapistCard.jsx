export default function TherapistCard({ name, specialty, price }) {

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

      <img
        src="https://via.placeholder.com/80"
        alt="therapist"
        className="rounded-full mb-4"
      />

      <h3 className="text-lg font-semibold">{name}</h3>

      <p className="text-gray-500">{specialty}</p>

      <p className="text-blue-600 font-semibold mt-2">
        ${price} / session
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Book Session
      </button>

    </div>
  );
}