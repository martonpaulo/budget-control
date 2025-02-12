import { ErrorBox } from "@/components/ErrorBox";
import { Skeleton } from "@/components/Skeleton";
import { AmountHighlight, TableContent } from "@/components/Table/styles";
import { NumberText } from "@/styles/shared";
import { TransactionType } from "@/types/transaction";
import { formatDate } from "@/utils/dateFormatter";
import { formatCurrency } from "@/utils/moneyFormatter";

interface TableProps {
  transactions: TransactionType[];
  isLoading: boolean;
  isError: boolean;
}

export function Table({ transactions, isLoading, isError }: TableProps) {
  if (isError) return <ErrorBox />;

  if (isLoading) {
    return (
      <TableContent>
        <tbody>
          {[...Array(3)].map((_, index) => (
            <tr key={index}>
              <td colSpan={4}>
                <Skeleton loading>Loading...</Skeleton>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContent>
    );
  }

  return (
    <TableContent>
      <tbody>
        {transactions.map((transaction) => (
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
          </tr>
        ))}
      </tbody>
    </TableContent>
  );
}
