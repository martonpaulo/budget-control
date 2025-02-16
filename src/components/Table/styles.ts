import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: scroll;
`;

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
      width: 30%;
      min-width: 15rem;
    }

    &:nth-child(2) {
      width: 25%;
      text-align: right;
      min-width: 12.5rem;
    }

    &:nth-child(3) {
      width: 20%;
      text-align: center;
      min-width: 12rem;
    }

    &:nth-child(4) {
      width: 20%;
      text-align: center;
      min-width: 12rem;
    }

    &:nth-child(5) {
      width: 5%;
      text-align: center;
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
  }
`;

export const TransactionsTableContent = styled.div`
  ${(props) => props.theme.screens.sm} {
    display: none;
  }
`;

export const TransactionsCardsContent = styled.div`
  display: none;

  ${(props) => props.theme.screens.sm} {
    display: block;
  }
`;
