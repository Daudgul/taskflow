type StatsCardProps = {
  title: string;
  value: string;
  change: string;
};

function StatsCard({ title, value, change }: StatsCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
        📊
      </div>

      <p className="text-sm font-medium text-slate-500">{title}</p>

      <h3 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
        {value}
      </h3>

      <p className="mt-3 text-sm font-medium text-emerald-600">{change}</p>
    </div>
  );
}

export default StatsCard;
