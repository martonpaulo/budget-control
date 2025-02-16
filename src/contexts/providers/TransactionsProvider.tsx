import { ReactNode, useEffect } from "react";

import { useTransactionsOperations } from "@/contexts/hooks/useTransactionsOperations";
import { TransactionsContext } from "@/contexts/TransactionsContext";

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const {
    transactions,
    transactionsTotalCount,
    filteredTransactions,
    filteredTransactionsCount,
    statuses,
    loadTransactions,
    paginateTransactions,
    filterTransactions,
    addTransaction,
    removeTransaction,
  } = useTransactionsOperations();

  useEffect(
    function () {
      loadTransactions();
    },
    [loadTransactions]
  );

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        transactionsTotalCount,
        filteredTransactions,
        filteredTransactionsCount,
        statuses,
        loadTransactions,
        paginateTransactions,
        filterTransactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
