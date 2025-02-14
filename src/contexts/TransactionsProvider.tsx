import { ReactNode, useCallback, useEffect, useState } from "react";

import {
  AsyncStatusType,
  StatusStateType,
  TransactionsContext,
  TransactionsContextType,
} from "@/contexts/TransactionsContext";
import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";
import {
  fetchTransactions,
  postTransaction,
} from "@/services/transactionsService";
import { TransactionType } from "@/types/transaction";

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionType[]
  >([]);

  const [statuses, setStatuses] = useState<StatusStateType>({
    load: { loading: false, error: null, success: false },
    filter: { loading: false, error: null, success: false },
    add: { loading: false, error: null, success: false },
  });

  const updateStatus = useCallback(
    (key: keyof typeof statuses, status: Partial<AsyncStatusType>) => {
      setStatuses((prev) => ({
        ...prev,
        [key]: { ...prev[key], ...status },
      }));
    },
    []
  );

  const loadTransactions = useCallback(async () => {
    updateStatus("load", { loading: true, error: null, success: false });

    try {
      const data = await fetchTransactions();
      setTransactions(data);
      setFilteredTransactions(data);
      updateStatus("load", { loading: false, success: true });
    } catch (error) {
      console.error("Error loading transactions:", error);
      updateStatus("load", {
        loading: false,
        error: "Error loading transactions.",
      });
    }
  }, [updateStatus]);

  const filterTransactions = useCallback(
    async (query: string) => {
      updateStatus("filter", { loading: true, error: null, success: false });

      try {
        const data = await fetchTransactions(query);
        setFilteredTransactions(data);
        updateStatus("filter", { loading: false, success: true });
      } catch (error) {
        console.error("Error filtering transactions:", error);
        updateStatus("filter", {
          loading: false,
          error: "Error filtering transactions.",
        });
      }
    },
    [updateStatus]
  );

  const addTransaction = useCallback(
    async (newTransactionForm: NewTransactionFormType) => {
      updateStatus("add", { loading: true, error: null, success: false });

      try {
        const newTransaction = await postTransaction(newTransactionForm);
        setTransactions((prev) => {
          const updatedList = [newTransaction, ...prev];
          setFilteredTransactions(updatedList);
          return updatedList;
        });
        updateStatus("add", { loading: false, success: true });
      } catch (error) {
        console.error("Error adding transaction:", error);
        updateStatus("add", {
          loading: false,
          error: "Error adding transaction.",
        });
      }
    },
    [updateStatus]
  );

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  const contextValue: TransactionsContextType = {
    transactions,
    filteredTransactions,
    statuses,
    loadTransactions,
    filterTransactions,
    addTransaction,
  };

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
}
