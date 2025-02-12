import * as Dialog from "@radix-ui/react-dialog";

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "@/components/Header/styles";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { SectionContainer } from "@/styles/shared";

export function Header() {
  return (
    <HeaderContainer>
      <SectionContainer>
        <HeaderContent>
          <h1>Budget Control</h1>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>New transaction</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </SectionContainer>
    </HeaderContainer>
  );
}
