import { TransactionType } from "@/types/transaction";

import { api } from "@/lib/axios";

export async function fetchTransactions(
  query?: string
): Promise<TransactionType[]> {
  const response = await api.get("/transactions", {
    params: { q: query },
  });

  return response.data;
}
