type BoardHeaderProps = {
  onCreateTask: () => void;
};

function BoardHeader({ onCreateTask }: BoardHeaderProps) {
  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Website Redesign
        </h1>

        <p className="mt-1 text-slate-500">
          Track tasks, priorities, and project progress.
        </p>
      </div>

      <button
        onClick={onCreateTask}
        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        New Task
      </button>
    </div>
  );
}

export default BoardHeader;
