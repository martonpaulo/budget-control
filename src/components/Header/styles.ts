import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.gray900};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.h1`
  color: ${(props) => props.theme.colors.gray100};
  ${(props) => props.theme.screens.sm} {
    font-size: 1rem;
  }
`;

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme.colors.green500};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  display: flex;
  padding: 0.75rem 1.25rem;
  border-radius: ${(props) => props.theme.sizes.borderRadius};

  ${(props) => props.theme.screens.sm} {
    padding: 0.5rem 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.green700};
  }
`;
