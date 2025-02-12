export const defaultTheme = {
  colors: {
    white: "#fff",

    gray100: "#E1E1E6",
    gray300: "#C4C4CC",
    gray400: "#8D8D99",
    gray500: "#7C7C8A",
    gray600: "#323238",
    gray700: "#29292E",
    gray800: "#202024",
    gray900: "#121214",

    green300: "#00B37E",
    green500: "#00875F",
    green700: "#015F43",

    red300: "#F75A68",
    red500: "#AB222E",
    red700: "#7A1921",
  },

  screens: {
    sm: "@media (max-width: 480px)",
    md: "@media (min-width: 481px) and (max-width: 768px)",
    lg: "@media (min-width: 769px) and (max-width: 1188px)",
    xl: "@media (min-width: 1189px)",

    min: {
      md: "@media (min-width: 481px)",
      lg: "@media (min-width: 1189px)",
    },

    max: {
      md: "@media (max-width: 768px)",
      lg: "@media (max-width: 1188px)",
    },
  },

  sizes: {
    pageWidth: "1120px",
    borderRadius: "6px",
  },

  fonts: {
    mono: '"JetBrains Mono", monospace',
    sans: '"Inter", sans-serif',
  },
} as const;
