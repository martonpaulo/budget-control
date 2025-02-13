import { ReactNode, useEffect, useState } from "react";

import {
  TransactionsContext,
  TransactionsContextType,
} from "@/contexts/TransactionsContext";
import { fetchTransactions } from "@/services/transactionsService";
import { TransactionType } from "@/types/transaction";

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionType[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [filteredIsLoading, setFilteredIsLoading] = useState(false);
  const [filteredIsError, setFilteredIsError] = useState(false);
  const [filteredIsSuccess, setFilteredIsSuccess] = useState(false);

  async function loadAllTransactions() {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const data = await fetchTransactions();
      setTransactions(data);
      setFilteredTransactions(data);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      console.error("Error loading transactions:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function filterTransactionsByQuery(query: string) {
    setFilteredIsLoading(true);
    setFilteredIsError(false);
    setFilteredIsSuccess(false);

    try {
      const data = await fetchTransactions(query);
      setFilteredTransactions(data);
      setFilteredIsSuccess(true);
    } catch (error) {
      setFilteredIsError(true);
      console.error("Error filtering transactions:", error);
    } finally {
      setFilteredIsLoading(false);
    }
  }

  useEffect(() => {
    loadAllTransactions();
  }, []);

  const contextValue: TransactionsContextType = {
    transactions,
    filteredTransactions,
    isLoading,
    isError,
    isSuccess,
    filteredIsLoading,
    filteredIsError,
    filteredIsSuccess,
    loadTransactions: loadAllTransactions,
    filterTransactions: filterTransactionsByQuery,
  };

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
}
