import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { useTransactions } from "@/hooks/useTransactions";
import { HomepageContainer } from "@/pages/Homepage/styles";
import { SectionContainer } from "@/styles/shared";

export function Homepage() {
  const { filteredTransactions, isLoading, error } = useTransactions(
    (context) => ({
      filteredTransactions: context.filteredTransactions,
      isLoading:
        context.statuses.filter.loading || context.statuses.load.loading,
      error: context.statuses.filter.error || context.statuses.load.error,
    })
  );

  return (
    <HomepageContainer>
      <Header />

      <Summary />

      <SectionContainer>
        <SearchForm />
        <Table
          transactions={filteredTransactions}
          isLoading={isLoading}
          error={error}
        />
      </SectionContainer>
    </HomepageContainer>
  );
}
