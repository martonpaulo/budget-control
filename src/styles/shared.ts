import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.pageWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

interface NumberTextProps {
  $bold?: boolean;
}

export const NumberText = styled.span<NumberTextProps>`
  font-family: ${(props) => props.theme.fonts.mono};
  font-weight: ${(props) => (props.$bold ? 600 : 350)};
`;
