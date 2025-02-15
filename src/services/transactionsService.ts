import { api } from "@/lib/axios";
import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";
import { TransactionType } from "@/types/transaction";

interface FetchTransactionsParams {
  query?: string;
  page?: number;
}

export async function fetchTransactions({
  query,
  page = 1,
}: FetchTransactionsParams) {
  const response = await api.get("/transactions", {
    params: { q: query, _sort: "createdAt", _order: "desc", _page: page },
  });

  return {
    transactions: response.data,
    totalCount: Number(response.headers["x-total-count"]),
  };
}

export async function postTransaction(
  newTransactionForm: NewTransactionFormType
): Promise<TransactionType> {
  const { amount, category, description, variant } = newTransactionForm;

  const response = await api.post("/transactions", {
    description,
    amount,
    variant,
    category,
    createdAt: new Date().toISOString(),
  });

  return response.data;
}
