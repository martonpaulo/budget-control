import {
  deleteTransactionAPI,
  fetchTransactionsAPI,
  postTransactionAPI,
} from "@/services/transactionsServiceAPI";
import {
  deleteTransactionLocal,
  fetchTransactionsLocal,
  postTransactionLocal,
} from "@/services/transactionsServiceLocal";

const useLocalStorage = import.meta.env.VITE_USE_LOCAL_STORAGE === "true";

export const fetchTransactions = useLocalStorage
  ? fetchTransactionsLocal
  : fetchTransactionsAPI;

export const postTransaction = useLocalStorage
  ? postTransactionLocal
  : postTransactionAPI;

export const deleteTransaction = useLocalStorage
  ? deleteTransactionLocal
  : deleteTransactionAPI;
