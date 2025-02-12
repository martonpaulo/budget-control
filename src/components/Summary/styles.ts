import styled from "styled-components";

import { ColorType } from "@/types/color";

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  $backgroundColor?: ColorType;
  $iconColor?: ColorType;
}

export const SummaryCard = styled.div<SummaryCardProps>`
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: 2rem;

  background: ${(props) =>
    props.$backgroundColor
      ? props.theme.colors[props.$backgroundColor]
      : props.theme.colors.gray600};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.gray300};
  }

  & > span {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  svg {
    color: ${(props) =>
      props.$iconColor && props.theme.colors[props.$iconColor]};
  }
`;
