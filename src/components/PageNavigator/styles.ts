import { Pagination } from "react-headless-pagination";
import styled from "styled-components";

export const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.mono};
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;

  & > * {
    display: flex;
    align-items: center;
  }
`;

export const PageList = styled.ul`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

const Button = styled.button`
  color: ${(props) => props.theme.colors.green500};
  margin: 0 1rem;

  &:disabled {
    color: ${(props) => props.theme.colors.gray600};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors.green300};
  }
`;

export const StyledPrevButton = styled(Button).attrs({
  as: Pagination.PrevButton,
})``;

export const StyledNextButton = styled(Button).attrs({
  as: Pagination.NextButton,
})``;

export const StyledPageButton = styled(Pagination.PageButton)`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  line-height: 0;

  border-radius: ${(props) => props.theme.sizes.borderRadius};

  background-color: ${(props) => props.theme.colors.gray600};
  color: ${(props) => props.theme.colors.gray300};

  &.active {
    background-color: ${(props) => props.theme.colors.green700};
    color: ${(props) => props.theme.colors.gray100};

    &:hover {
      pointer-events: none;
    }
  }

  &:not(.active):hover {
    background-color: ${(props) => props.theme.colors.green700};
    color: ${(props) => props.theme.colors.gray100};

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    cursor: pointer;
  }
`;
