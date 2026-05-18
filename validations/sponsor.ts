import { z } from "zod";

const contactPattern = /^\+?[1-9]\d{1,14}$/;

export const createSponsorValidator = z.object({
     logo: z
          .string()
          .trim(),

     personName: z
          .string()
          .trim()
          .min(2, "Person name must be at least 2 characters")
          .max(50, "Person name must not exceed 50 characters"),

     businessName: z
          .string()
          .trim()
          .min(2, "Business name must be at least 2 characters")
          .max(100, "Business name must not exceed 100 characters"),

     serviceType: z
          .string()
          .trim()
          .min(2, "Service type must be at least 2 characters")
          .max(50, "Service type must not exceed 50 characters"),

     contact: z
          .string()
          .trim()
          .max(15, "Contact must not exceed 15 characters")
          .regex(
               contactPattern,
               "Contact number must be a valid Australian format."
          ),

     suburb: z
          .string()
          .trim()
          .min(2, "Suburb must be at least 2 characters")
          .max(50, "Suburb must not exceed 50 characters"),
});

export const updateSponsorValidator = z.object({
     logo: z
          .string()
          .trim()
          .url("Sponsor logo must be a valid URL")
          .optional(),

     personName: z
          .string()
          .trim()
          .min(2, "Person name must be at least 2 characters")
          .max(50, "Person name must not exceed 50 characters")
          .optional(),

     businessName: z
          .string()
          .trim()
          .min(2, "Business name must be at least 2 characters")
          .max(50, "Business name must not exceed 50 characters")
          .optional(),

     contact: z
          .string()
          .trim()
          .max(15, "Contact must not exceed 15 characters")
          .regex(
               contactPattern,
               "Contact number must be a valid international format (e.g., +923001234567)."
          )
          .optional(),
});