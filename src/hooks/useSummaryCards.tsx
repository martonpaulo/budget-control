import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { useTransactions } from "@/hooks/useTransactions";
import { formatCurrency, getSummary } from "@/utils/moneyFormatter";

export function useSummaryCards() {
  const { transactions, isLoading } = useTransactions((context) => ({
    transactions: context.transactions,
    isLoading: context.statuses.load.loading,
  }));

  const summary = getSummary(transactions);

  const isSummaryPositive = summary.total >= 0;

  const cards = [
    {
      id: "income",
      label: "Income",
      icon: <ArrowCircleUp size={32} />,
      iconColor: "green300" as const,
      value: formatCurrency({ amount: summary.income }),
    },
    {
      id: "outcome",
      label: "Outcome",
      icon: <ArrowCircleDown size={32} />,
      iconColor: "red300" as const,
      value: formatCurrency({ amount: summary.outcome }),
    },
    {
      id: "total",
      label: "Total",
      icon: <CurrencyDollar size={32} />,
      iconColor: "white" as const,
      backgroundColor: isSummaryPositive
        ? ("green700" as const)
        : ("red700" as const),
      value: formatCurrency({ amount: summary.total }),
      skeletonBaseColor: isSummaryPositive
        ? ("green700" as const)
        : ("red700" as const),
      skeletonHighlightColor: isSummaryPositive
        ? ("green500" as const)
        : ("red500" as const),
    },
  ];

  return { cards, isLoading };
}
