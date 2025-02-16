import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  TitleContainer,
} from "@/components/Header/styles";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { SectionContainer } from "@/styles/shared";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <SectionContainer>
        <HeaderContent>
          <TitleContainer>Budget Control</TitleContainer>

          <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger asChild>
              <NewTransactionButton>New transaction</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal onClose={() => setIsModalOpen(false)} />
          </Dialog.Root>
        </HeaderContent>
      </SectionContainer>
    </HeaderContainer>
  );
}
