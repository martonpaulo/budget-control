import {
  AsyncStatusType,
  StatusStateType,
} from "@/contexts/TransactionsContext";
import { fetchTransactions } from "@/services/transactionsService";
import { TransactionType } from "@/types/transaction";
import { simulateDelay } from "@/utils/delaySimulator";

interface LoadTransactionsOperationProps {
  delay?: number;
  updateStatus: (
    key: keyof StatusStateType,
    status: Partial<AsyncStatusType>
  ) => void;
  setTransactions: (transactions: TransactionType[]) => void;
  setFilteredTransactions: (transactions: TransactionType[]) => void;
  setTransactionsTotalCount: (count: number) => void;
  setFilteredTransactionsCount: (count: number) => void;
}

export default async function loadTransactionsOperation(
  props: LoadTransactionsOperationProps
) {
  const {
    delay,
    updateStatus,
    setTransactions,
    setFilteredTransactions,
    setTransactionsTotalCount,
    setFilteredTransactionsCount,
  } = props;

  updateStatus("load", { loading: true, error: null, success: false });
  try {
    const emptyQueryWithDelay = await simulateDelay({}, delay);
    const result = await fetchTransactions(emptyQueryWithDelay);
    setTransactions(result.transactions);
    setFilteredTransactions(result.transactions);
    setTransactionsTotalCount(result.totalCount);
    setFilteredTransactionsCount(result.totalCount);
    updateStatus("load", { loading: false, success: true });
  } catch (error) {
    console.error("Error loading transactions:", error);
    updateStatus("load", {
      loading: false,
      error: "Error loading transactions.",
    });
  }
}
