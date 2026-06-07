import { http, HttpResponse } from "msw";

import { projects } from "../data/projects";

export const projectsHandlers = [
  http.get("/api/projects", () => {
    return HttpResponse.json(projects);
  }),
  http.post("/api/projects", async ({ request }) => {
    const body = (await request.json()) as { name: string };

    const newProject = {
      id: Date.now(),
      name: body.name,
      progress: 0,
      tasks: 0,
    };

    projects.unshift(newProject);

    return HttpResponse.json(newProject, {
      status: 201,
    });
  }),
  http.delete("/api/projects/:id", ({ params }) => {
    const projectId = Number(params.id);

    const index = projects.findIndex((project) => project.id === projectId);
    if (index !== -1) {
      projects.splice(index, 1);
    }

    return HttpResponse.json({ success: true }, { status: 200 });
  }),
];
