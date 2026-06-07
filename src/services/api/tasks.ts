import type {
  Task,
  CreateTaskPayload,
  UpdateTaskStatusPayload,
} from "../../types/task";
export async function getTasks(): Promise<Task[]> {
  const response = await fetch("/api/tasks");

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export async function createTask(payload: CreateTaskPayload): Promise<Task> {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}

export async function updateTaskStatus(payload: UpdateTaskStatusPayload) {
  const response = await fetch(`/api/tasks/${payload.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: payload.status,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update task status");
  }

  return response.json();
}
