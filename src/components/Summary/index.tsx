import {
  ArrowCircleDown,
  ArrowCircleUpRight,
  CurrencyDollar,
} from "phosphor-react";

import { SummaryCard, SummaryContainer } from "@/components/Summary/styles";
import { NumberText, SectionContainer } from "@/styles/shared";

export function Summary() {
  return (
    <SectionContainer>
      <SummaryContainer>
        <SummaryCard $iconColor="green300">
          <header>
            <span>Income</span>
            <ArrowCircleUpRight size={32} />
          </header>
          <NumberText $bold>$17,400.00</NumberText>
        </SummaryCard>

        <SummaryCard $iconColor="red300">
          <header>
            <span>Outcome</span>
            <ArrowCircleDown size={32} />
          </header>
          <NumberText $bold>$17,400.00</NumberText>
        </SummaryCard>

        <SummaryCard $backgroundColor="green700" $iconColor="white">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} />
          </header>
          <NumberText $bold>$17,400.00</NumberText>
        </SummaryCard>
      </SummaryContainer>
    </SectionContainer>
  );
}
