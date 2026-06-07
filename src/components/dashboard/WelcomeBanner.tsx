function WelcomeBanner() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8">
      <div className="max-w-2xl">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
          Productivity Dashboard
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Welcome back, Daud 👋
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Manage projects, tasks and team workflows
          from one modern workspace.
        </p>

        <button className="mt-6 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800">
          Create Project
        </button>

        <div className="mt-8 flex gap-8">
          <div>
            <p className="text-2xl font-bold text-slate-900">
              8
            </p>

            <p className="text-sm text-slate-500">
              Active Projects
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-slate-900">
              24
            </p>

            <p className="text-sm text-slate-500">
              Total Tasks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBanner;