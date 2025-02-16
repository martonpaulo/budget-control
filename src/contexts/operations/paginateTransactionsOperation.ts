import {
  AsyncStatusType,
  StatusStateType,
} from "@/contexts/TransactionsContext";
import { fetchTransactions } from "@/services/transactionsService";
import { TransactionType } from "@/types/transaction";

interface PaginateTransactionsOperationProps {
  page: number;
  query: string;
  updateStatus: (
    key: keyof StatusStateType,
    status: Partial<AsyncStatusType>
  ) => void;
  setFilteredTransactions: (transactions: TransactionType[]) => void;
  setFilteredTransactionsCount: (count: number) => void;
}

export default async function paginateTransactionsOperation(
  props: PaginateTransactionsOperationProps
) {
  const {
    page,
    query,
    updateStatus,
    setFilteredTransactions,
    setFilteredTransactionsCount,
  } = props;

  updateStatus("filter", { loading: true, error: null, success: false });
  try {
    const result = await fetchTransactions({ query, page });
    setFilteredTransactions(result.transactions);
    setFilteredTransactionsCount(result.totalCount);
    updateStatus("filter", { loading: false, success: true });
  } catch (error) {
    console.error("Error paginating transactions:", error);
    updateStatus("filter", {
      loading: false,
      error: "Error paginating transactions.",
    });
  }
}
