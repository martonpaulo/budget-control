import styled from "styled-components";

import { TransactionVariantEnum } from "@/types/transaction";

interface AmountHighlightProps {
  $variant: TransactionVariantEnum;
}

export const AmountHighlight = styled.span<AmountHighlightProps>`
  color: ${(props) =>
    props.$variant === TransactionVariantEnum.INCOME
      ? props.theme.colors.green300
      : props.theme.colors.red300};
`;
