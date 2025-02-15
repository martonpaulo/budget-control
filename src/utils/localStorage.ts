import { mockTransactions } from "@/data/transactions";
import { TransactionType } from "@/types/transaction";

export interface FetchTransactionsParams {
  query?: string;
  page?: number;
}

const STORAGE_PREFIX = "@budget-control";
const STORAGE_VERSION =
  import.meta.env.VITE_STORAGE_VERSION || "unknown-version";
const STORAGE_KEY = `${STORAGE_PREFIX}:transactions:${STORAGE_VERSION}`;

export function getStoredTransactions(): TransactionType[] {
  const storageAsJSON = localStorage.getItem(STORAGE_KEY);

  if (!storageAsJSON) {
    return mockTransactions;
  }

  try {
    return JSON.parse(storageAsJSON) as TransactionType[];
  } catch (error) {
    console.error("Error parsing cart state from localStorage", error);
    return mockTransactions;
  }
}

export function setStoredTransactions(transactions: TransactionType[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}
