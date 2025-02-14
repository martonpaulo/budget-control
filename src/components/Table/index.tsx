import { ReactNode } from "react";

import { Skeleton } from "@/components/Skeleton";
import { AmountHighlight, TableContent } from "@/components/Table/styles";
import { NumberText } from "@/styles/shared";
import { TransactionType } from "@/types/transaction";
import { formatDate } from "@/utils/dateFormatter";
import { formatCurrency } from "@/utils/moneyFormatter";

interface TableProps {
  transactions: TransactionType[];
  isLoading: boolean;
  error: string | null;
}

export function Table({ transactions, isLoading, error }: TableProps) {
  const isEmpty = transactions.length === 0;

  if (error) return renderTable(<ErrorTable error={error} />);
  if (isLoading) return renderTable(<LoadingTable />);
  if (isEmpty) return renderTable(<EmptyTable />);

  return renderTable(<TransactionsTable transactions={transactions} />);
}

function renderTable(content: ReactNode) {
  return (
    <TableContent>
      <tbody>{content}</tbody>
    </TableContent>
  );
}

interface ErrorTableProps {
  error: string;
}

function ErrorTable({ error }: ErrorTableProps) {
  return (
    <tr>
      <td colSpan={4} className="error">
        {error}
      </td>
    </tr>
  );
}

function LoadingTable() {
  return Array.from({ length: 3 }, (_, index) => (
    <tr key={index}>
      <td colSpan={4}>
        <Skeleton loading>Loading...</Skeleton>
      </td>
    </tr>
  ));
}

function EmptyTable() {
  return (
    <tr>
      <td colSpan={4}>No transactions found.</td>
    </tr>
  );
}

interface TransactionsTableProps {
  transactions: TransactionType[];
}

function TransactionsTable({ transactions }: TransactionsTableProps) {
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
    </tr>
  ));
}
