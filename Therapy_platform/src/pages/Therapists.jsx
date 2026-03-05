import Navbar from "../components/Navbar";

const therapists = [
  {
    name: "Dr Amina Yusuf",
    specialty: "Anxiety",
    rating: "4.8",
  },
  {
    name: "Dr David Okorie",
    specialty: "Relationship Therapy",
    rating: "4.7",
  },
];

export default function Therapists() {

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-3xl font-bold mb-10">
          Find a Therapist
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {therapists.map((t, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
            >

              <h3 className="text-xl font-semibold">
                {t.name}
              </h3>

              <p className="text-gray-600">
                Specialty: {t.specialty}
              </p>

              <p className="text-yellow-500">
                ⭐ {t.rating}
              </p>

              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                Book Session
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}