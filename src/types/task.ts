export const TASK_STATUSES = {
  TODO: "todo",
  IN_PROGRESS: "in-progress",
  REVIEW: "review",
  DONE: "done",
} as const;

export const TASK_PRIORITIES = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
} as const;

export type TaskStatus = (typeof TASK_STATUSES)[keyof typeof TASK_STATUSES];

export type TaskPriority =
  (typeof TASK_PRIORITIES)[keyof typeof TASK_PRIORITIES];

export type Task = {
  id: number;
  title: string;
  priority: TaskPriority;
  dueDate: string;
  assignee: string;
  status: TaskStatus;
};

export type CreateTaskPayload = {
  title: string;
  priority: TaskPriority;
};

export type UpdateTaskStatusPayload = {
  id: number;
  status: TaskStatus;
};
