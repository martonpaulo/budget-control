// styled.d.ts
import "styled-components";

import type { CSSProp } from "styled-components";

import { defaultTheme } from "@/styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
