import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";

import { SearchFormContainer } from "@/components/SearchForm/styles";
import { useTransactions } from "@/hooks/useTransactions";
import { searchFormSchema, SearchFormType } from "@/schemas/searchFormSchema";

export function SearchForm() {
  const { filterTransactions, statuses } = useTransactions();
  const isBusy =
    statuses.filter.loading || statuses.load.loading || statuses.add.loading;

  const { register, handleSubmit } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransaction(data: SearchFormType) {
    await filterTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Search for a transaction..."
        {...register("query")}
      />

      <button type="submit" disabled={isBusy}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
}
