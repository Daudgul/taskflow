export type Project = {
  id: number;
  name: string;
  progress: number;
  tasks: number;
};

export type CreateProjectPayload = {
  name: string;
};
