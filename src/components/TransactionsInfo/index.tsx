import { TransactionsInfoContainer } from "@/components/TransactionsInfo/styles";
import { useTransactions } from "@/hooks/useTransactions";

export function TransactionsInfo() {
  const count = useTransactions((context) => context.filteredTransactionsCount);

  const itemsLabel = count === 1 ? `1 item` : `${count} items`;

  return (
    <TransactionsInfoContainer>
      <h2>Transactions</h2>
      <p>{itemsLabel}</p>
    </TransactionsInfoContainer>
  );
}
