import { useState } from "react";
import Modal from "../ui/Modal";

type CreateProjectModalProps = {
  onClose: () => void;
  onCreateProject: (name: string) => void;
  isLoading: boolean;
};

function CreateProjectModal({
  onClose,
  onCreateProject,
  isLoading,
}: CreateProjectModalProps) {
  const [projectName, setProjectName] = useState("");
  const handleCreateProject = () => {
    if (!projectName.trim()) return;

    onCreateProject(projectName);

    onClose();
  };

  return (
    <Modal>
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Create Project</h2>

        <p className="mt-2 text-slate-500">
          Add a new project to your workspace.
        </p>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Project Name
          </label>

          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleCreateProject}
            disabled={isLoading}
            className="rounded-xl bg-slate-900 px-4 py-2 text-white"
          >
            {isLoading ? "Creating..." : "Create Project"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CreateProjectModal;
