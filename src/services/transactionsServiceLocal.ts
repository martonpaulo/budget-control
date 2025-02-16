import { NewTransactionFormType } from "@/schemas/newTransactionFormSchema";
import { TransactionType } from "@/types/transaction";
import {
  getStoredTransactions,
  setStoredTransactions,
} from "@/utils/localStorage";

export interface FetchTransactionsParams {
  query?: string;
  page?: number;
}

const ITEMS_PER_PAGE = 10;

export async function fetchTransactionsLocal({
  query,
  page = 1,
}: FetchTransactionsParams): Promise<{
  transactions: TransactionType[];
  totalCount: number;
}> {
  let transactions = getStoredTransactions();

  if (query) {
    const lowerQuery = query.toLowerCase();
    transactions = transactions.filter(
      (t) =>
        t.description.toLowerCase().includes(lowerQuery) ||
        t.category.toLowerCase().includes(lowerQuery)
    );
  }

  transactions.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const totalCount = transactions.length;
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginated = transactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return { transactions: paginated, totalCount };
}

export async function postTransactionLocal(
  newTransactionForm: NewTransactionFormType
): Promise<TransactionType> {
  const { amount, category, description, variant } = newTransactionForm;

  const newTransaction: TransactionType = {
    id: Date.now(), // using timestamp as id
    description,
    amount,
    variant,
    category,
    createdAt: new Date().toISOString(),
  };

  const transactions = getStoredTransactions();
  const updatedTransactions = [newTransaction, ...transactions];
  setStoredTransactions(updatedTransactions);

  return newTransaction;
}
