import { Skeleton } from "@/components/Skeleton";
import {
  AmountContainer,
  SummaryCard,
  SummaryContainer,
} from "@/components/Summary/styles";
import { useSummaryCards } from "@/hooks/useSummaryCards";
import { NumberText, SectionContainer } from "@/styles/shared";

export function Summary() {
  const { cards, isLoading } = useSummaryCards();

  return (
    <SectionContainer>
      <SummaryContainer>
        {cards.map((card) => (
          <SummaryCard
            key={card.id}
            $iconColor={card.iconColor}
            $backgroundColor={card.backgroundColor}
          >
            <header>
              {card.icon}
              <span>{card.label}</span>
            </header>
            <AmountContainer>
              <Skeleton
                loading={isLoading}
                width="75%"
                baseColor={card.skeletonBaseColor}
                highlightColor={card.skeletonHighlightColor}
              >
                <NumberText $bold>{card.value}</NumberText>
              </Skeleton>
            </AmountContainer>
          </SummaryCard>
        ))}
      </SummaryContainer>
    </SectionContainer>
  );
}
