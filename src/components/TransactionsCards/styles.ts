import styled from "styled-components";

import { TransactionVariantEnum } from "@/types/transaction";

export const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.gray700};
  padding: 1.25rem;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.gray300};
  }

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.gray300};
    line-height: 0;

    &:hover {
      color: ${(props) => props.theme.colors.green500};
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    margin-right: 0.5rem;
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

  font-size: 1.25rem;
`;

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.25rem;

  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray500};
`;
