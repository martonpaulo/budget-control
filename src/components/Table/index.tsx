import { ReactNode, useState } from "react";

import { PageNavigator } from "@/components/PageNavigator";
import { Skeleton } from "@/components/Skeleton";
import { TableContent } from "@/components/Table/styles";
import { TransactionsTable } from "@/components/TransactionsTable";
import { useTransactions } from "@/hooks/useTransactions";

export function Table() {
  const {
    transactions,
    isEmpty,
    isLoading,
    error,
    totalPages,
    paginateTransactions,
  } = useTransactions((context) => ({
    transactions: context.filteredTransactions,
    isEmpty: context.filteredTransactions.length === 0,
    isLoading: context.statuses.filter.loading || context.statuses.load.loading,
    error: context.statuses.filter.error || context.statuses.load.error,
    totalPages: Math.ceil(context.filteredTransactionsCount / 10),
    paginateTransactions: context.paginateTransactions,
  }));

  const [currentPage, setCurrentPage] = useState<number>(0);

  if (error) {
    return renderTable(<ErrorTable error={error} />);
  }

  if (isLoading) {
    return renderTable(<LoadingTable />);
  }

  if (isEmpty) {
    return renderTable(<EmptyTable />);
  }

  function handlePageChange(page: number) {
    paginateTransactions(page + 1);
    setCurrentPage(page);
  }

  return (
    <>
      {renderTable(<TransactionsTable transactions={transactions} />)}

      <PageNavigator
        totalPages={totalPages}
        page={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
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
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <tr key={index}>
          <td colSpan={4}>
            <Skeleton loading>Loading...</Skeleton>
          </td>
        </tr>
      ))}
    </>
  );
}

function EmptyTable() {
  return (
    <tr>
      <td colSpan={4}>No transactions found.</td>
    </tr>
  );
}
