import {
  AsyncStatusType,
  StatusStateType,
} from "@/contexts/TransactionsContext";
import { fetchTransactions } from "@/services/transactionsService";
import { TransactionType } from "@/types/transaction";

interface FilterTransactionsOperationProps {
  query: string;
  transactions: TransactionType[];
  transactionsTotalCount: number;
  updateStatus: (
    key: keyof StatusStateType,
    status: Partial<AsyncStatusType>
  ) => void;
  setFilteredTransactions: (transactions: TransactionType[]) => void;
  setFilteredTransactionsCount: (count: number) => void;
  setFilterQuery: (query: string) => void;
}

export default async function filterTransactionsOperation(
  props: FilterTransactionsOperationProps
) {
  const {
    query,
    transactions,
    transactionsTotalCount,
    updateStatus,
    setFilteredTransactions,
    setFilteredTransactionsCount,
    setFilterQuery,
  } = props;

  updateStatus("filter", { loading: true, error: null, success: false });
  if (!query) {
    setFilteredTransactions(transactions);
    setFilteredTransactionsCount(transactionsTotalCount);
    setFilterQuery("");
    updateStatus("filter", { loading: false, success: true });
    return;
  }
  try {
    const result = await fetchTransactions({ query });
    setFilteredTransactions(result.transactions);
    setFilteredTransactionsCount(result.totalCount);
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
