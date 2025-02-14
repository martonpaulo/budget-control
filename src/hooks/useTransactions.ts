import { Context, useContextSelector } from "use-context-selector";

import {
  TransactionsContext,
  TransactionsContextType,
} from "@/contexts/TransactionsContext";

export function useTransactions<T>(
  selector: (context: TransactionsContextType) => T
): T {
  const selected = useContextSelector(
    TransactionsContext as Context<TransactionsContextType>,
    selector
  );
  const fullContext = useContextSelector(TransactionsContext, (c) => c);

  if (!fullContext) {
    throw new Error(
      "useTransactions must be used within a TransactionsProvider"
    );
  }

  return selected;
}
