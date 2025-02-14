import { api } from "@/lib/axios";
import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";
import { TransactionType } from "@/types/transaction";

export async function fetchTransactions(
  query?: string
): Promise<TransactionType[]> {
  const response = await api.get("/transactions", {
    params: { q: query, _sort: "createdAt", _order: "desc" },
  });

  return response.data;
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
