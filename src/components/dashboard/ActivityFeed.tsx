const activities = [
  {
    id: 1,
    message: "John moved Homepage task to Review",
  },
  {
    id: 2,
    message: "Sarah completed Authentication Module",
  },
  {
    id: 3,
    message: "Mike created Mobile App Project",
  },
  {
    id: 4,
    message: "Emma updated Dashboard Design",
  },
];

function ActivityFeed() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-indigo-600" />

            <p className="text-sm text-slate-600">{activity.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;
