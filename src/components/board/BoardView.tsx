import type { Task } from "../../types/task";
import BoardColumn from "./BoardColumn";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { TASK_STATUSES } from "../../types/task";
import type { TaskStatus } from "../../types/task";

type BoardViewProps = {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onDragEnd: (taskId: number, status: TaskStatus) => void;
};

function BoardView({ tasks, onTaskClick, onDragEnd }: BoardViewProps) {
  const todoTasks = tasks.filter((task) => task.status === TASK_STATUSES.TODO);

  const inProgressTasks = tasks.filter(
    (task) => task.status === TASK_STATUSES.IN_PROGRESS,
  );

  const reviewTasks = tasks.filter(
    (task) => task.status === TASK_STATUSES.REVIEW,
  );
  console.log("Board Tasks", tasks);

  const doneTasks = tasks.filter((task) => task.status === TASK_STATUSES.DONE);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    onDragEnd(Number(active.id), over.id as TaskStatus);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid gap-6 xl:grid-cols-4">
        <BoardColumn
          title="Todo"
          tasks={todoTasks}
          onTaskClick={onTaskClick}
          id={TASK_STATUSES.TODO}
        />

        <BoardColumn
          title="In Progress"
          tasks={inProgressTasks}
          onTaskClick={onTaskClick}
          id={TASK_STATUSES.IN_PROGRESS}
        />

        <BoardColumn
          title="Review"
          tasks={reviewTasks}
          onTaskClick={onTaskClick}
          id={TASK_STATUSES.REVIEW}
        />

        <BoardColumn
          title="Done"
          tasks={doneTasks}
          onTaskClick={onTaskClick}
          id={TASK_STATUSES.DONE}
        />
      </div>
    </DndContext>
  );
}

export default BoardView;
