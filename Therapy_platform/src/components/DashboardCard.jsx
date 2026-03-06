export default function DashboardCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}