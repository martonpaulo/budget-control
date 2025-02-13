import { TransactionType, TransactionVariantEnum } from "@/types/transaction";

interface FormatCurrencyProps {
  amount: number;
  transactionVariant?: TransactionVariantEnum;
  hasSign?: boolean;
}

export function formatCurrency({
  amount,
  transactionVariant,
  hasSign = false,
}: FormatCurrencyProps) {
  const amountInCurrency = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (!hasSign || !transactionVariant) {
    return `$${amountInCurrency}`;
  }

  const sign = transactionVariant === TransactionVariantEnum.INCOME ? "+" : "-";

  return `${sign} $${amountInCurrency}`;
}

export function getSummary(transactions: TransactionType[]) {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.variant === TransactionVariantEnum.INCOME) {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
}
