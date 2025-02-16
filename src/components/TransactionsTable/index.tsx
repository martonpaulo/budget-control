import { Trash } from "phosphor-react";

import { AmountHighlight } from "@/components/TransactionsTable/styles";
import { NumberText } from "@/styles/shared";
import { TransactionType } from "@/types/transaction";
import { formatDate } from "@/utils/dateFormatter";
import { formatCurrency } from "@/utils/moneyFormatter";

interface TransactionsTableProps {
  transactions: TransactionType[];
  onRemove: (id: number) => void;
}

export function TransactionsTable({
  transactions,
  onRemove,
}: TransactionsTableProps) {
  return transactions.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.description}</td>
      <td>
        <AmountHighlight $variant={transaction.variant}>
          <NumberText $bold>
            {formatCurrency({
              amount: transaction.amount,
              transactionVariant: transaction.variant,
              hasSign: true,
            })}
          </NumberText>
        </AmountHighlight>
      </td>
      <td>{transaction.category}</td>
      <td>{formatDate(transaction.createdAt)}</td>
      <td>
        <button onClick={() => onRemove(transaction.id)}>
          <Trash />
        </button>
      </td>
    </tr>
  ));
}
