type ProjectCardProps = {
  id: number;
  name: string;
  progress: number;
  tasks: number;
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
};

function ProjectCard({
  id,
  name,
  progress,
  tasks,
  onClick,
  onDelete,
}: ProjectCardProps) {
  return (
    <div
      className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      onClick={() => onClick(id)}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="text-sm text-red-500 hover:text-red-600"
        >
          Delete
        </button>
      </div>

      <p className="mt-4 text-sm text-slate-500">{progress}% Complete</p>

      <div className="mt-2 h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-slate-900"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-4 text-sm text-slate-600">{tasks} Tasks</p>
    </div>
  );
}

export default ProjectCard;
