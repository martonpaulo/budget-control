import styled from "styled-components";

export const HomepageContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.pageWidth};
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;
