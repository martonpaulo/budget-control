import styled from "styled-components";

import { TransactionVariantEnum } from "@/types/transaction";

export const TableContent = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme.colors.gray700};

    &.error {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.red500};
    }

    &:first-child {
      border-top-left-radius: ${(props) => props.theme.sizes.borderRadius};
      border-bottom-left-radius: ${(props) => props.theme.sizes.borderRadius};
    }

    &:last-child {
      border-top-right-radius: ${(props) => props.theme.sizes.borderRadius};
      border-bottom-right-radius: ${(props) => props.theme.sizes.borderRadius};
    }

    &:nth-child(1) {
      width: 35%;
    }

    &:nth-child(2) {
      width: 25%;
      text-align: right;
    }

    &:nth-child(3) {
      width: 20%;
      text-align: center;
    }

    &:nth-child(4) {
      width: 20%;
      text-align: center;
    }
  }
`;

interface AmountHighlightProps {
  $variant: TransactionVariantEnum;
}

export const AmountHighlight = styled.span<AmountHighlightProps>`
  color: ${(props) =>
    props.$variant === TransactionVariantEnum.INCOME
      ? props.theme.colors.green300
      : props.theme.colors.red300};
`;
