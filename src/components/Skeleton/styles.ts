import styled, { css, keyframes } from "styled-components";

import { ColorType } from "@/types/color";

const getShimmerKeyframes = (width: string) => keyframes`
  0% {
    background-position: calc(-${width} / 4) 0;
  }
  100% {
    background-position: calc(${width} / 4) 0;
  }
`;

interface SkeletonContainerProps {
  $loading: boolean;
  $width?: string;
  $baseColor?: ColorType;
  $highlightColor?: ColorType;
}

export const SkeletonContainer = styled.div<SkeletonContainerProps>`
  position: relative;
  display: inline-block;
  width: ${(props) => props.$width || "100%"};

  &::after {
    content: ${(props) => (props.$loading ? '""' : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    animation: ${(props) =>
      props.$loading
        ? css`
            ${getShimmerKeyframes(props.$width || "100%")} 1.5s linear infinite
          `
        : "none"};
    background: ${(props) =>
      props.$loading
        ? props.$baseColor
          ? props.theme.colors[props.$baseColor]
          : props.theme.colors.gray600
        : "transparent"};
    background-image: ${(props) =>
      props.$loading
        ? `linear-gradient(
            to right,
            ${
              props.$baseColor
                ? props.theme.colors[props.$baseColor]
                : props.theme.colors.gray600
            } 0%,
            ${
              props.$highlightColor
                ? props.theme.colors[props.$highlightColor]
                : props.theme.colors.gray500
            } 20%,
            ${
              props.$baseColor
                ? props.theme.colors[props.$baseColor]
                : props.theme.colors.gray600
            } 40%,
            ${
              props.$baseColor
                ? props.theme.colors[props.$baseColor]
                : props.theme.colors.gray600
            } 100%
          )`
        : "none"};
    background-repeat: no-repeat;
    background-size: ${(props) =>
      props.$loading ? `calc(${props.$width || "100%"} * 4)` : "100%"};
    border-radius: ${(props) =>
      props.$loading ? props.theme.sizes.borderRadius : "0"};
  }
`;

interface SkeletonTextProps {
  $loading: boolean;
}

export const SkeletonText = styled.div<SkeletonTextProps>`
  color: ${(props) => (props.$loading ? "transparent" : "inherit")};
`;
