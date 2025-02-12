import { TransactionVariantType } from "@/types/transaction";

export function formatCurrency(
  amount: number,
  transactionVariant: TransactionVariantType
): string {
  const amountInCurrency = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const sign = transactionVariant === "income" ? "+" : "-";

  return `${sign} $${amountInCurrency}`;
}
