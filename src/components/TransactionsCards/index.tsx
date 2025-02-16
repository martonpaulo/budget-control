import { CalendarBlank, TagSimple, Trash } from "phosphor-react";

import {
  AmountHighlight,
  Card,
  CardBody,
  CardDetails,
  CardHeader,
  CardRow,
  CardsContent,
} from "@/components/TransactionsCards/styles";
import { NumberText } from "@/styles/shared";
import { TransactionType } from "@/types/transaction";
import { formatDate } from "@/utils/dateFormatter";
import { formatCurrency } from "@/utils/moneyFormatter";

interface TransactionsCardsProps {
  transactions: TransactionType[];
  onRemove: (id: number) => void;
}

export function TransactionsCards({
  transactions,
  onRemove,
}: TransactionsCardsProps) {
  return (
    <CardsContent>
      {transactions.map((transaction) => (
        <Card key={transaction.id}>
          <CardHeader>
            <span>{transaction.description}</span>
            <button onClick={() => onRemove(transaction.id)}>
              <Trash />
            </button>
          </CardHeader>
          <CardBody>
            <CardRow>
              <AmountHighlight $variant={transaction.variant}>
                <NumberText $bold>
                  {formatCurrency({
                    amount: transaction.amount,
                    transactionVariant: transaction.variant,
                    hasSign: true,
                    hasSpaceBetween: false,
                  })}
                </NumberText>
              </AmountHighlight>
            </CardRow>
            <CardRow>
              <CardDetails>
                <TagSimple />
                <span>{transaction.category}</span>
              </CardDetails>

              <CardDetails>
                <CalendarBlank />
                <span>{formatDate(transaction.createdAt)}</span>
              </CardDetails>
            </CardRow>
          </CardBody>
        </Card>
      ))}
    </CardsContent>
  );
}
