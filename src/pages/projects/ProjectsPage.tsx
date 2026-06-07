import ProjectsHeader from "../../components/projects/ProjectsHeader";
import ProjectsGrid from "../../components/projects/ProjectsGrid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useCreateProject,
  useDeleteProject,
} from "../../hooks/useProjectMutations";
import LoadingState from "../../components/ui/LoadingState";
import ErrorState from "../../components/ui/ErrorState";
import EmptyState from "../../components/ui/EmptyState";
import toast from "react-hot-toast";

import { useProjects } from "../../hooks/useProjects";

import CreateProjectModal from "../../components/projects/CreateProjectModal";

function ProjectsPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: projects = [], isLoading, error } = useProjects();

  const createProjectMutation = useCreateProject();

  const deleteProjectMutation = useDeleteProject();

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  const handleCreateProject = async (name: string) => {
    try {
      await createProjectMutation.mutateAsync({
        name,
      });

      toast.success("Project created successfully");

      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to create project");

      console.error(error);
    }
  };

  const handleDeleteProject = async (projectId: number) => {
    try {
      await deleteProjectMutation.mutateAsync(projectId);

      toast.success("Project deleted successfully");
    } catch (error) {
      toast.error("Failed to delete project");

      console.error(error);
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }
  if (error) {
    return <ErrorState message="Failed to load projects" />;
  }

  if (!projects.length) {
    return (
      <EmptyState
        title="No Projects Yet"
        description="Create your first project to get started."
      />
    );
  }

  return (
    <div>
      <ProjectsHeader onCreateProject={() => setIsModalOpen(true)} />

      <ProjectsGrid
        projects={projects}
        onProjectClick={handleProjectClick}
        onDeleteProject={handleDeleteProject}
      />

      {isModalOpen && (
        <CreateProjectModal
          onClose={() => setIsModalOpen(false)}
          onCreateProject={handleCreateProject}
          isLoading={createProjectMutation.isPending}
        />
      )}
    </div>
  );
}

export default ProjectsPage;
