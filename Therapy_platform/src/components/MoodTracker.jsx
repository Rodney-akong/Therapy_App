export default function MoodTracker() {

  const moods = ["😊 Happy", "😐 Neutral", "😢 Sad", "😡 Angry"];

  return (
    <div className="space-y-2">

      {moods.map((mood, index) => (

        <button
          key={index}
          className="w-full bg-gray-100 hover:bg-blue-100 p-2 rounded-lg"
        >
          {mood}
        </button>

      ))}

    </div>
  );
}