import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useMemo } from "react";

import { useTransactions } from "@/hooks/useTransactions";
import { formatCurrency, getSummary } from "@/utils/moneyFormatter";

export function useSummaryCards() {
  const { transactions, isLoading } = useTransactions();

  const summary = useMemo(() => getSummary(transactions), [transactions]);

  const isSummaryPositive = useMemo(() => summary.total >= 0, [summary.total]);

  const cards = useMemo(
    () => [
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
        skeletonHighlightColor: isSummaryPositive ? "green500" : "red500",
      },
    ],
    [summary, isSummaryPositive]
  );

  return { cards, isLoading };
}
