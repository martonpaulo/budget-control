import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { useTransactions } from "@/hooks/useTransactions";
import { HomepageContainer } from "@/pages/Homepage/styles";
import { SectionContainer } from "@/styles/shared";

export function Homepage() {
  const { filteredTransactions, filteredIsLoading, filteredIsError } =
    useTransactions();

  return (
    <HomepageContainer>
      <Header />

      <Summary />

      <SectionContainer>
        <SearchForm />
        <Table
          transactions={filteredTransactions}
          isLoading={filteredIsLoading}
          isError={filteredIsError}
        />
      </SectionContainer>
    </HomepageContainer>
  );
}
