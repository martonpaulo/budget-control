export enum TransactionVariantEnum {
  INCOME = "income",
  OUTCOME = "outcome",
}

export type TransactionType = {
  id: number;
  description: string;
  amount: number;
  variant: TransactionVariantEnum;
  category: string;
  createdAt: string;
};
