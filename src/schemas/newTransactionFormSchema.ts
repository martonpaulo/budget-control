import * as z from "zod";

import { TransactionVariantEnum } from "@/types/transaction";

export const newTransactionFormSchema = z.object({
  description: z.string().nonempty(),
  amount: z.number().positive(),
  category: z.string(),
  variant: z.enum([
    TransactionVariantEnum.INCOME,
    TransactionVariantEnum.OUTCOME,
  ]),
});

export type NewTransactionFormType = z.infer<typeof newTransactionFormSchema>;

export const newTransactionFormInitialValues = {
  variant: TransactionVariantEnum.INCOME,
};
