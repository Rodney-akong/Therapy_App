export default function Journal() {
  return (

    <div>

      <textarea
        placeholder="Write your thoughts today..."
        className="w-full border p-3 rounded-lg h-24 placeholder-gray-400"
      />

      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Save Entry
      </button>

    </div>

  );
}