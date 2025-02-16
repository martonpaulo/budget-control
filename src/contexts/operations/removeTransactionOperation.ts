import {
  AsyncStatusType,
  StatusStateType,
} from "@/contexts/TransactionsContext";
import { deleteTransaction } from "@/services/transactionsService";

interface RemoveTransactionOperationProps {
  transactionId: number;
  updateStatus: (
    key: keyof StatusStateType,
    status: Partial<AsyncStatusType>
  ) => void;
  deleteTransaction: typeof deleteTransaction;
  loadTransactions: (delay?: number) => Promise<void>;
}

export default async function removeTransactionOperation(
  props: RemoveTransactionOperationProps
) {
  const { transactionId, updateStatus, deleteTransaction, loadTransactions } =
    props;

  updateStatus("remove", { loading: true, error: null, success: false });
  try {
    await deleteTransaction(transactionId);
    await loadTransactions(500);
    updateStatus("remove", { loading: false, success: true });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    updateStatus("remove", {
      loading: false,
      error: "Error deleting transaction.",
    });
  }
}
