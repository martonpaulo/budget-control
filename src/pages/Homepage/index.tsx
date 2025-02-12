import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { HomepageContainer } from "@/pages/Homepage/styles";
import { SectionContainer } from "@/styles/shared";

export function Homepage() {
  return (
    <HomepageContainer>
      <Header />

      <Summary />

      <SectionContainer>
        <SearchForm />
        <Table />
      </SectionContainer>
    </HomepageContainer>
  );
}
