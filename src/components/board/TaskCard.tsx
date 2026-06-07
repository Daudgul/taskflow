import { useDraggable } from "@dnd-kit/core";

type TaskCardProps = {
  id: number;
  title: string;
  priority: string;
  dueDate: string;
  assignee: string;
  onClick: () => void;
};

function TaskCard({
  id,
  title,
  priority,
  dueDate,
  assignee,
  onClick,
}: TaskCardProps) {
  const priorityStyles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: String(id),
  });

  const style = transform
    ? {
        transform: `translate3d(
        ${transform.x}px,
        ${transform.y}px,
        0
      )`,
      }
    : undefined;
  return (
    <div
      onClick={onClick}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="font-medium text-slate-900">{title}</h3>

      <div className="mt-4 flex items-center justify-between">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            priorityStyles[priority as keyof typeof priorityStyles]
          }`}
        >
          {priority}
        </span>

        <span className="text-xs text-slate-500">{dueDate}</span>
      </div>

      <div className="mt-4 flex justify-end">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
          {assignee}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
