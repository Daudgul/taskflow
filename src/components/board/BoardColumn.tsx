import TaskCard from "./TaskCard";
import type { Task } from "../../types/task";
import { useDroppable } from "@dnd-kit/core";

type BoardColumnProps = {
  title: string;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  id: string;
};

function BoardColumn({ title, tasks, onTaskClick, id }: BoardColumnProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className="min-h-[500px] rounded-3xl border border-slate-200 bg-white p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-slate-900">{title}</h2>

        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            id={task.id}
            key={task.id}
            title={task.title}
            priority={task.priority}
            dueDate={task.dueDate}
            assignee={task.assignee}
            onClick={() => onTaskClick(task)}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardColumn;
