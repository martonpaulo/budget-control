import {
  AsyncStatusType,
  StatusStateType,
} from "@/contexts/TransactionsContext";
import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";
import { postTransaction } from "@/services/transactionsService";
import { TransactionType } from "@/types/transaction";
import { simulateDelay } from "@/utils/delaySimulator";

interface AddTransactionOperationProps {
  newTransactionForm: NewTransactionFormType;
  updateStatus: (
    key: keyof StatusStateType,
    status: Partial<AsyncStatusType>
  ) => void;
  simulateDelay: typeof simulateDelay;
  postTransaction: typeof postTransaction;
  setTransactions: (
    transactions:
      | TransactionType[]
      | ((prev: TransactionType[]) => TransactionType[])
  ) => void;
  setTransactionsTotalCount: (
    count: number | ((prev: number) => number)
  ) => void;
  filterQuery: string;
  filterTransactions: (query: string) => void;
  setFilteredTransactions: (
    transactions:
      | TransactionType[]
      | ((prev: TransactionType[]) => TransactionType[])
  ) => void;
  setFilteredTransactionsCount: (
    count: number | ((prev: number) => number)
  ) => void;
}

export default async function addTransactionOperation(
  props: AddTransactionOperationProps
) {
  const {
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
  } = props;

  updateStatus("add", { loading: true, error: null, success: false });
  try {
    const formWithDelay = await simulateDelay(newTransactionForm);
    const newTransaction = await postTransaction(formWithDelay);
    setTransactions(function (prev) {
      return [newTransaction, ...prev];
    });
    setTransactionsTotalCount(function (prev) {
      return prev + 1;
    });

    if (filterQuery.trim()) {
      filterTransactions(filterQuery);
    } else {
      setFilteredTransactions(function (prev) {
        return [newTransaction, ...prev];
      });
      setFilteredTransactionsCount(function (prev) {
        return prev + 1;
      });
    }
    updateStatus("add", { loading: false, success: true });
  } catch (error) {
    console.error("Error adding transaction:", error);
    updateStatus("add", { loading: false, error: "Error adding transaction." });
  }
}
