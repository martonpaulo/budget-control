export type TransactionVariantType = "income" | "outcome";

export type TransactionType = {
  id: number;
  description: string;
  amount: number;
  variant: TransactionVariantType;
  category: string;
  date: Date;
};
