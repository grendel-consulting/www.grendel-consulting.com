import { z } from "zod/mini";

const Principal = z.readonly(
  z.object({
    FULL_NAME: z.string(),
    USER_NAME: z.string(),
  }),
);

export const PRINCIPAL = Principal.parse({
  FULL_NAME: "James Ramirez",
  USER_NAME: "ramirezj",
});

export type Principal = z.infer<typeof Principal>;
