import { createContext } from "react";

import { TransactionType } from "@/types/transaction";

export interface TransactionsContextType {
  transactions: TransactionType[];
  filteredTransactions: TransactionType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  filteredIsLoading: boolean;
  filteredIsError: boolean;
  filteredIsSuccess: boolean;
  loadTransactions: () => Promise<void>;
  filterTransactions: (query: string) => Promise<void>;
}

export const TransactionsContext = createContext<
  TransactionsContextType | undefined
>(undefined);
