import type { Task } from "../../types/task";
import Drawer from "../ui/Drawer";

type TaskDetailsDrawerProps = {
  task: Task;
  onClose: () => void;
};

function TaskDetailsDrawer({ task, onClose }: TaskDetailsDrawerProps) {
  return (
    <Drawer>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Task Details
          </h2>

          <button onClick={onClose} className="text-slate-500">
            ✕
          </button>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-sm text-slate-500">Title</p>

            <p className="mt-1 font-medium text-slate-900">{task.title}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Priority</p>

            <p className="mt-1">{task.priority}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Due Date</p>

            <p className="mt-1">{task.dueDate}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Assignee</p>

            <p className="mt-1">{task.assignee}</p>
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default TaskDetailsDrawer;
