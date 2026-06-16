import { z } from "zod";

export const clusterSchema = z.object({
  clusterName: z
    .string()
    .trim()
    .min(1, "Cluster name is required")
    .max(50, "Cluster name must not exceed 50 characters"),
});