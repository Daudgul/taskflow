import { setupWorker } from "msw/browser";

import { projectsHandlers } from "./handlers/projects";
import { tasksHandlers } from "./handlers/tasks";

export const worker = setupWorker(...projectsHandlers, ...tasksHandlers);
