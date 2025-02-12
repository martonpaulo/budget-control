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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3.75rem;
    height: 3.75rem;
    margin-right: 1.25rem;
  }
`;

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  background-color: ${(props) => props.theme.colors.green500};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  padding: 0 1.25rem;
  border-radius: ${(props) => props.theme.sizes.borderRadius};

  &:hover {
    background-color: ${(props) => props.theme.colors.green700};
  }
`;
