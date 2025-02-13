import * as z from "zod";

export const searchFormSchema = z.object({
  query: z.string(),
});

export type SearchFormType = z.infer<typeof searchFormSchema>;
