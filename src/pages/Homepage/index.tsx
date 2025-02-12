import { useContext } from "react";

import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { HomepageContainer } from "@/pages/Homepage/styles";
import { SectionContainer } from "@/styles/shared";

export function Homepage() {
  const { transactions, isLoading, isError } = useContext(TransactionsContext);

  return (
    <HomepageContainer>
      <Header />

      <Summary />

      <SectionContainer>
        <SearchForm />
        <Table
          transactions={transactions}
          isLoading={isLoading}
          isError={isError}
        />
      </SectionContainer>
    </HomepageContainer>
  );
}
