import { z } from "zod";

export const suburbSchema = z.object({
  suburbName: z
    .string()
    .trim()
    .min(1, "Suburb name is required")
    .max(50, "Suburb name must not exceed 50 characters"),

  assignedCluster: z
    .string()
    .min(1, "Please select a cluster"),
});