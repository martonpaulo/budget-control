import { ThemeProvider } from "styled-components";

import { TransactionsProvider } from "@/contexts/TransactionsContext";
import { Homepage } from "@/pages/Homepage";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Homepage />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
