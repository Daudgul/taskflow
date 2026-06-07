type ProjectsHeaderProps = {
  onCreateProject: () => void;
};

function ProjectsHeader({ onCreateProject }: ProjectsHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Projects
        </h1>

        <p className="mt-1 text-slate-500">
          Manage all your projects in one place.
        </p>
      </div>

      <button
        onClick={onCreateProject}
        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        New Project
      </button>
    </div>
  );
}

export default ProjectsHeader;
