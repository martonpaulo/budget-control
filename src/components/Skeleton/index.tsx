import { ReactNode } from "react";

import { SkeletonContainer, SkeletonText } from "@/components/Skeleton/styles";
import { ColorType } from "@/types/color";

interface SkeletonProps {
  loading: boolean;
  children: ReactNode;
  width?: string;
  baseColor?: ColorType;
  highlightColor?: ColorType;
}

export function Skeleton({
  loading,
  children,
  width,
  baseColor,
  highlightColor,
}: SkeletonProps) {
  return (
    <SkeletonContainer
      $loading={loading}
      $width={width}
      $baseColor={baseColor}
      $highlightColor={highlightColor}
      aria-busy={loading}
    >
      <SkeletonText $loading={loading}>{children}</SkeletonText>
    </SkeletonContainer>
  );
}
