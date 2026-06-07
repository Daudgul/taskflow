import BoardHeader from "../../components/board/BoardHeader";
import BoardView from "../../components/board/BoardView";
import { useState } from "react";
import type { Task } from "../../types/task";
import TaskDetailsDrawer from "../../components/board/TaskDetailsDrawer";
import {
  useCreateTask,
  useUpdateTaskStatus,
} from "../../hooks/useTaskMutations";
import toast from "react-hot-toast";
import { useTasks } from "../../hooks/useTasks";

import LoadingState from "../../components/ui/LoadingState";
import type { TaskStatus } from "../../types/task";
import ErrorState from "../../components/ui/ErrorState";

import CreateTaskModal from "../../components/board/CreateTaskModal";

function ProjectBoardPage() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { data: tasks = [], isLoading, error } = useTasks();
  const createTaskMutation = useCreateTask();
  const updateTaskStatusMutation = useUpdateTaskStatus();

  console.log("tasks =>", tasks);

  const handleCreateTask = async (
    title: string,
    priority: Task["priority"],
  ) => {
    try {
      await createTaskMutation.mutateAsync({
        title,
        priority,
      });

      toast.success("Task created successfully");
      setIsTaskModalOpen(false);
    } catch (error) {
      toast.error("Failed to create task");

      console.error(error);
    }
  };

  const handleTaskStatusChange = async (taskId: number, status: TaskStatus) => {
    try {
      await updateTaskStatusMutation.mutateAsync({
        id: taskId,
        status,
      });

      toast.success("Task moved");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }
  if (error) {
    return <ErrorState message="Failed to load tasks" />;
  }

  return (
    <div className="space-y-8">
      <BoardHeader onCreateTask={() => setIsTaskModalOpen(true)} />

      {isTaskModalOpen && (
        <CreateTaskModal
          onClose={() => setIsTaskModalOpen(false)}
          onCreateTask={handleCreateTask}
          isLoading={createTaskMutation.isPending}
        />
      )}

      <BoardView
        tasks={tasks}
        onTaskClick={setSelectedTask}
        onDragEnd={handleTaskStatusChange}
      />

      {selectedTask && (
        <TaskDetailsDrawer
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
}

export default ProjectBoardPage;
