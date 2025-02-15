import { api } from "@/lib/axios";
import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";

export interface FetchTransactionsParams {
  query?: string;
  page?: number;
}

export async function fetchTransactionsAPI({
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

export async function postTransactionAPI(
  newTransactionForm: NewTransactionFormType
) {
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
