import { useState } from "react";

import addTransactionOperation from "@/contexts/operations/addTransactionOperation";
import filterTransactionsOperation from "@/contexts/operations/filterTransactionsOperation";
import loadTransactionsOperation from "@/contexts/operations/loadTransactionsOperation";
import paginateTransactionsOperation from "@/contexts/operations/paginateTransactionsOperation";
import removeTransactionOperation from "@/contexts/operations/removeTransactionOperation";
import {
  AsyncStatusType,
  StatusStateType,
} from "@/contexts/TransactionsContext";
import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";
import {
  deleteTransaction,
  postTransaction,
} from "@/services/transactionsService";
import { TransactionType } from "@/types/transaction";
import { simulateDelay } from "@/utils/delaySimulator";

export function useTransactionsOperations() {
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
    remove: { loading: false, error: null, success: false },
  };
  const [statuses, setStatuses] = useState<StatusStateType>(initialStatuses);

  function updateStatus(
    key: keyof StatusStateType,
    status: Partial<AsyncStatusType>
  ) {
    setStatuses(function (prev) {
      return { ...prev, [key]: { ...prev[key], ...status } };
    });
  }

  function loadTransactions(delay?: number) {
    return loadTransactionsOperation({
      delay,
      updateStatus,
      setTransactions,
      setFilteredTransactions,
      setTransactionsTotalCount,
      setFilteredTransactionsCount,
    });
  }

  function filterTransactions(query: string) {
    return filterTransactionsOperation({
      query,
      transactions,
      transactionsTotalCount,
      updateStatus,
      setFilteredTransactions,
      setFilteredTransactionsCount,
      setFilterQuery,
    });
  }

  function paginateTransactions(page: number) {
    return paginateTransactionsOperation({
      page,
      query: filterQuery,
      updateStatus,
      setFilteredTransactions,
      setFilteredTransactionsCount,
    });
  }

  function addTransaction(newTransactionForm: NewTransactionFormType) {
    return addTransactionOperation({
      newTransactionForm,
      updateStatus,
      simulateDelay,
      postTransaction,
      setTransactions,
      setTransactionsTotalCount,
      filterQuery,
      filterTransactions,
      setFilteredTransactions,
      setFilteredTransactionsCount,
    });
  }

  function removeTransaction(transactionId: number) {
    return removeTransactionOperation({
      transactionId,
      updateStatus,
      deleteTransaction,
      loadTransactions,
    });
  }

  return {
    transactions,
    transactionsTotalCount,
    filteredTransactions,
    filteredTransactionsCount,
    statuses,
    loadTransactions,
    filterTransactions,
    paginateTransactions,
    addTransaction,
    removeTransaction,
  };
}
