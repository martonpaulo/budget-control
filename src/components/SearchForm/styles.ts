import styled from "styled-components";

export const SearchFormContainer = styled.form`
  margin-top: 4rem;
  margin-bottom: 1.5rem;

  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    background-color: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.gray300};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray500};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    border: 1px solid ${(props) => props.theme.colors.green300};
    color: ${(props) => props.theme.colors.green300};
    font-weight: 600;
    border-radius: ${(props) => props.theme.sizes.borderRadius};

    &:hover {
      background-color: ${(props) => props.theme.colors.green500};
      border-color: ${(props) => props.theme.colors.green500};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
