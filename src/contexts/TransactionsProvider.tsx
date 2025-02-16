import { ReactNode, useEffect, useState } from "react";

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
import { simulateDelay } from "@/utils/delaySimulator";

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [transactionsTotalCount, setTransactionsTotalCount] = useState(0);
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionType[]
  >([]);
  const [filteredTransactionsCount, setFilteredTransactionsCount] = useState(0);
  const [filterQuery, setFilterQuery] = useState("");

  const initialStatuses: StatusStateType = {
    load: { loading: false, error: null, success: false },
    filter: { loading: false, error: null, success: false },
    add: { loading: false, error: null, success: false },
  };
  const [statuses, setStatuses] = useState<StatusStateType>(initialStatuses);

  function updateStatus(
    key: keyof StatusStateType,
    status: Partial<AsyncStatusType>
  ) {
    setStatuses((prev) => ({
      ...prev,
      [key]: { ...prev[key], ...status },
    }));
  }

  async function loadTransactions() {
    updateStatus("load", { loading: true, error: null, success: false });
    try {
      const emptyQueryWithDelay = await simulateDelay({});
      const { transactions: fetchedTransactions, totalCount } =
        await fetchTransactions(emptyQueryWithDelay);
      setTransactions(fetchedTransactions);
      setFilteredTransactions(fetchedTransactions);
      setTransactionsTotalCount(totalCount);
      setFilteredTransactionsCount(totalCount);
      updateStatus("load", { loading: false, success: true });
    } catch (error) {
      console.error("Error loading transactions:", error);
      updateStatus("load", {
        loading: false,
        error: "Error loading transactions.",
      });
    }
  }

  async function filterTransactions(query: string) {
    updateStatus("filter", { loading: true, error: null, success: false });
    if (!query) {
      setFilteredTransactions(transactions);
      setFilteredTransactionsCount(transactionsTotalCount);
      setFilterQuery("");
      updateStatus("filter", { loading: false, success: true });
      return;
    }
    try {
      const { transactions: fetchedTransactions, totalCount } =
        await fetchTransactions({ query });
      setFilteredTransactions(fetchedTransactions);
      setFilteredTransactionsCount(totalCount);
      setFilterQuery(query);
      updateStatus("filter", { loading: false, success: true });
    } catch (error) {
      console.error("Error filtering transactions:", error);
      updateStatus("filter", {
        loading: false,
        error: "Error filtering transactions.",
      });
    }
  }

  async function paginateTransactions(page: number) {
    updateStatus("filter", { loading: true, error: null, success: false });
    try {
      const { transactions: fetchedTransactions, totalCount } =
        await fetchTransactions({
          query: filterQuery,
          page,
        });
      setFilteredTransactions(fetchedTransactions);
      setFilteredTransactionsCount(totalCount);
      updateStatus("filter", { loading: false, success: true });
    } catch (error) {
      console.error("Error paginating transactions:", error);
      updateStatus("filter", {
        loading: false,
        error: "Error paginating transactions.",
      });
    }
  }

  async function addTransaction(newTransactionForm: NewTransactionFormType) {
    updateStatus("add", { loading: true, error: null, success: false });
    try {
      const newTransactionFormWithDelay = await simulateDelay(
        newTransactionForm
      );
      const newTransaction = await postTransaction(newTransactionFormWithDelay);
      setTransactions((prev) => [newTransaction, ...prev]);
      setTransactionsTotalCount((prev) => prev + 1);

      if (filterQuery.trim()) {
        // If a filter is active, refresh the filtered list from the server
        filterTransactions(filterQuery);
      } else {
        setFilteredTransactions((prev) => [newTransaction, ...prev]);
        setFilteredTransactionsCount((prev) => prev + 1);
      }
      updateStatus("add", { loading: false, success: true });
    } catch (error) {
      console.error("Error adding transaction:", error);
      updateStatus("add", {
        loading: false,
        error: "Error adding transaction.",
      });
    }
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  const contextValue: TransactionsContextType = {
    transactions,
    transactionsTotalCount,
    filteredTransactions,
    filteredTransactionsCount,
    statuses,
    loadTransactions,
    paginateTransactions,
    filterTransactions,
    addTransaction,
  };

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
}
