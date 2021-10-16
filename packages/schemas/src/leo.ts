import { z } from "zod";

export const CREATE_OFFICER_SCHEMA = z.object({
  name: z.string().min(2).max(255),
  department: z.string().min(2).max(255),
  callsign: z.string().min(2).max(255),
  rank: z.string().max(255),
});

export const UPDATE_OFFICER_STATUS_SCHEMA = z.object({
  status: z.string().min(2).max(255),
  status2: z.string().min(2).max(255),
});
