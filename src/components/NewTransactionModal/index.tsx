import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionRadioGroup,
  TransactionTypeButton,
} from "@/components/NewTransactionModal/styles";

export function NewTransactionModal() {
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

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Amount" required />
          <input type="text" placeholder="Category" required />

          <TransactionRadioGroup>
            <TransactionTypeButton value="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton value="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButton>
          </TransactionRadioGroup>

          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
