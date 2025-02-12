import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "@/assets/logo.svg";
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionButton,
} from "@/components/Header/styles";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { SectionContainer } from "@/styles/shared";

export function Header() {
  return (
    <HeaderContainer>
      <SectionContainer>
        <HeaderContent>
          <LogoContainer>
            <img src={logoImg} alt="Budget Control's logo image" />
            <h1>Budget Control</h1>
          </LogoContainer>

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
