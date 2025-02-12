import { createContext, ReactNode, useEffect, useState } from "react";

import { TransactionType } from "@/types/transaction";

interface TransactionsContextType {
  transactions: TransactionType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function loadTransactions() {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3333/transactions");
      const data = (await response.json()) as TransactionType[];

      setTransactions(data);
      setIsSuccess(true);
    } catch {
      setIsError(true);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, isLoading, isError, isSuccess }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
