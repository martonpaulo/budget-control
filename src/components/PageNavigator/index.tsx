import { CaretLeft, CaretRight } from "phosphor-react";
import { Pagination } from "react-headless-pagination";

import {
  Container,
  PageList,
  StyledNextButton,
  StyledPageButton,
  StyledPrevButton,
} from "@/components/PageNavigator/styles";

interface PageNavigatorProps {
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}

export function PageNavigator({
  totalPages,
  page,
  onPageChange,
}: PageNavigatorProps) {
  return (
    <Container>
      <Pagination
        totalPages={totalPages}
        edgePageCount={2}
        middlePagesSiblingCount={1}
        currentPage={page}
        setCurrentPage={onPageChange}
        truncableText="..."
      >
        <StyledPrevButton aria-label="Go to previous page">
          <CaretLeft size={24} />
        </StyledPrevButton>

        <nav role="navigation" aria-label="Pagination Navigation">
          <PageList>
            <StyledPageButton
              activeClassName="active"
              inactiveClassName="inactive"
            />
          </PageList>
        </nav>

        <StyledNextButton aria-label="Go to next page">
          <CaretRight size={24} />
        </StyledNextButton>
      </Pagination>
    </Container>
  );
}
