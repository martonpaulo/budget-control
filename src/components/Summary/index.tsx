import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext, useMemo } from "react";

import { Skeleton } from "@/components/Skeleton";
import {
  AmountContainer,
  SummaryCard,
  SummaryContainer,
} from "@/components/Summary/styles";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { NumberText, SectionContainer } from "@/styles/shared";
import { formatCurrency, getSummary } from "@/utils/moneyFormatter";

export function Summary() {
  const { transactions, isLoading } = useContext(TransactionsContext);

  const summary = useMemo(() => getSummary(transactions), [transactions]);

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
        backgroundColor:
          summary.total >= 0 ? ("green700" as const) : ("red700" as const),
        value: formatCurrency({ amount: summary.total }),
      },
    ],
    [summary]
  );

  return (
    <SectionContainer>
      <SummaryContainer>
        {cards.map(({ id, label, icon, iconColor, backgroundColor, value }) => (
          <SummaryCard
            key={id}
            $iconColor={iconColor}
            $backgroundColor={backgroundColor}
          >
            <header>
              {icon}
              <span>{label}</span>
            </header>
            <AmountContainer>
              <Skeleton loading={isLoading} width="75%">
                <NumberText $bold>{value}</NumberText>
              </Skeleton>
            </AmountContainer>
          </SummaryCard>
        ))}
      </SummaryContainer>
    </SectionContainer>
  );
}
