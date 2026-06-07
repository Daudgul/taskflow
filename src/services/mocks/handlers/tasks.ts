import { http, HttpResponse } from "msw";

import { tasks } from "../data/tasks";

import { TASK_STATUSES } from "../../../types/task";
import type { CreateTaskPayload, Task, TaskStatus } from "../../../types/task";

export const tasksHandlers = [
  http.get("/api/tasks", () => {
    return HttpResponse.json(tasks);
  }),
  http.post("/api/tasks", async ({ request }) => {
    const body = (await request.json()) as CreateTaskPayload;

    const newTask: Task = {
      id: Date.now(),
      title: body.title,
      priority: body.priority,
      dueDate: "Jun 30",
      assignee: "DG",
      status: TASK_STATUSES.TODO,
    };

    tasks.unshift(newTask as (typeof tasks)[number]);

    return HttpResponse.json(newTask, {
      status: 201,
    });
  }),
  http.patch("/api/tasks/:id", async ({ params, request }) => {
    const taskId = Number(params.id);

    const body = (await request.json()) as {
      status: TaskStatus;
    };

    const task = tasks.find((task) => task.id === taskId) as Task | undefined;

    if (!task) {
      return HttpResponse.json({ message: "Task not found" }, { status: 404 });
    }

    task.status = body.status;

    return HttpResponse.json(task);
  }),
];
