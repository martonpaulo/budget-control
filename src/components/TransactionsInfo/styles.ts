import styled from "styled-components";

export const TransactionsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  height: 3rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 350;
    color: ${(props) => props.theme.colors.gray300};

    ${(props) => props.theme.screens.min.lg} {
      display: none;
    }
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray500};

    ${(props) => props.theme.screens.min.lg} {
      display: none;
    }
  }
`;
