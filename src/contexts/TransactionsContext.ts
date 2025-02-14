import { createContext } from "react";

import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";
import { TransactionType } from "@/types/transaction";

export type AsyncStatusType = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

export type StatusStateType = {
  load: AsyncStatusType;
  filter: AsyncStatusType;
  add: AsyncStatusType;
};

export interface TransactionsContextType {
  transactions: TransactionType[];
  filteredTransactions: TransactionType[];
  statuses: StatusStateType;
  loadTransactions: () => Promise<void>;
  filterTransactions: (query: string) => Promise<void>;
  addTransaction: (newTransaction: NewTransactionFormType) => Promise<void>;
}

export const TransactionsContext = createContext<
  TransactionsContextType | undefined
>(undefined);
