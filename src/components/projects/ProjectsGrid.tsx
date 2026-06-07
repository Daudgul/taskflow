import ProjectCard from "./ProjectCard";

import type { Project } from "../../types/project";
type ProjectsGridProps = {
  projects: Project[];
  onProjectClick: (id: number) => void;
  onDeleteProject: (id: number) => void;
};

function ProjectsGrid({
  projects,
  onProjectClick,
  onDeleteProject,
}: ProjectsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          progress={project.progress}
          tasks={project.tasks}
          onClick={onProjectClick}
          onDelete={onDeleteProject}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;
