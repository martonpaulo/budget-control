import { AmountHighlight, TableContent } from "@/components/Table/styles";
import { formatDate } from "@/components/utils/dateFormatter";
import { formatCurrency } from "@/components/utils/moneyFormatter";
import { transactionList } from "@/data/transactions";
import { NumberText } from "@/styles/shared";

export function Table() {
  return (
    <TableContent>
      <tbody>
        {transactionList.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>
              <AmountHighlight $variant={transaction.variant}>
                <NumberText $bold>
                  {formatCurrency(transaction.amount, transaction.variant)}
                </NumberText>
              </AmountHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{formatDate(transaction.date)}</td>
          </tr>
        ))}
      </tbody>
    </TableContent>
  );
}
