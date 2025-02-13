import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionRadioGroup,
  TransactionTypeButton,
} from "@/components/NewTransactionModal/styles";
import {
  newTransactionFormInitialValues,
  newTransactionFormSchema,
  NewTransactionFormType,
} from "@/schemas/newTransactionFormSchema";
import { TransactionVariantEnum } from "@/types/transaction";

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: newTransactionFormInitialValues,
  });

  async function handleCreateNewTransaction(data: NewTransactionFormType) {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New transaction</Dialog.Title>
        <Dialog.Description hidden>
          Register a new transaction
        </Dialog.Description>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Amount"
            required
            {...register("amount", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="variant"
            render={({ field }) => (
              <TransactionRadioGroup
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton value={TransactionVariantEnum.INCOME}>
                  <ArrowCircleUp size={24} />
                  Income
                </TransactionTypeButton>
                <TransactionTypeButton value={TransactionVariantEnum.OUTCOME}>
                  <ArrowCircleDown size={24} />
                  Outcome
                </TransactionTypeButton>
              </TransactionRadioGroup>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
