import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTask, updateTaskStatus } from "../services/api/tasks";

import type { CreateTaskPayload, UpdateTaskStatusPayload } from "../types/task";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTaskPayload) => createTask(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}

export function useUpdateTaskStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateTaskStatusPayload) => updateTaskStatus(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}
