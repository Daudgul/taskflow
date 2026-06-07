const projects = [
  {
    id: 1,
    name: "Website Redesign",
    progress: 65,
    tasks: 12,
  },
  {
    id: 2,
    name: "Mobile App",
    progress: 40,
    tasks: 8,
  },
  {
    id: 3,
    name: "Admin Dashboard",
    progress: 85,
    tasks: 20,
  },
];

function ProjectsOverview() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Recent Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">{project.name}</h3>

            <p className="mt-4 text-sm text-slate-500">
              {project.progress}% Complete
            </p>

            <div className="mt-2 h-2 rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-indigo-600"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>

            <p className="mt-4 text-sm text-slate-600">{project.tasks} Tasks</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsOverview;
