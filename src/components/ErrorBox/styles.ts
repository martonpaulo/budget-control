import styled from "styled-components";

export const ErrorBoxContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.colors.red300};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  text-align: center;
`;
