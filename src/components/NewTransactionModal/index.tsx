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
import { useTransactions } from "@/hooks/useTransactions";
import {
  newTransactionFormInitialValues,
  newTransactionFormSchema,
  NewTransactionFormType,
} from "@/schemas/newTransactionFormSchema";
import { TransactionVariantEnum } from "@/types/transaction";

interface NewTransactionModalProps {
  onClose: () => void;
}

export function NewTransactionModal({ onClose }: NewTransactionModalProps) {
  const addTransaction = useTransactions((context) => context.addTransaction);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: newTransactionFormInitialValues,
  });

  async function handleCreateNewTransaction(data: NewTransactionFormType) {
    await addTransaction(data);
    reset();
    onClose();
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
