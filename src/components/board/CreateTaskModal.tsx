import { useState } from "react";
import Modal from "../ui/Modal";

type CreateTaskModalProps = {
  onClose: () => void;
  onCreateTask: (title: string, priority: string) => void;
  isLoading: boolean;
};

function CreateTaskModal({
  onClose,
  onCreateTask,
  isLoading,
}: CreateTaskModalProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleCreateTask = () => {
    if (isLoading) return;
    if (!title.trim()) return;

    onCreateTask(title, priority);

    onClose();
  };
  return (
    <Modal>
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Create Task</h2>

        <p className="mt-2 text-slate-500">Add a task to your project board.</p>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Task Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Priority
          </label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleCreateTask}
            className="rounded-xl bg-slate-900 px-4 py-2 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Task"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CreateTaskModal;
