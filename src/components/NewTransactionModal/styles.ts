import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

import { TransactionVariantType } from "@/types/transaction";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  padding: 2.5rem 3rem;

  background-color: ${(props) => props.theme.colors.gray800};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme.colors.gray900};
      color: ${(props) => props.theme.colors.gray300};
      padding: 1rem;

      &[type="number"] {
        font-family: ${(props) => props.theme.fonts.mono};
      }

      &::placeholder {
        color: ${(props) => props.theme.colors.gray500};
        font-family: ${(props) => props.theme.fonts.sans};
      }
    }

    button[type="submit"] {
      height: 3.625rem;
      background-color: ${(props) => props.theme.colors.green500};
      color: ${(props) => props.theme.colors.white};
      font-weight: 600;
      padding: 0 1.25rem;
      border-radius: ${(props) => props.theme.sizes.borderRadius};
      margin-top: 1.5rem;

      &:hover {
        background-color: ${(props) => props.theme.colors.green700};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${(props) => props.theme.colors.gray500};
`;

export const TransactionRadioGroup = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5 rem;
`;

interface TransactionTypeButtonProps {
  value: TransactionVariantType;
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background-color: ${(props) => props.theme.colors.gray700};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  color: ${(props) => props.theme.colors.gray300};

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.value === "income"
          ? props.theme.colors.green500
          : props.theme.colors.red500};
  }

  svg {
    color: ${(props) =>
      props.value === "income"
        ? props.theme.colors.green300
        : props.theme.colors.red300};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme.colors.gray600};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) =>
      props.value === "income"
        ? props.theme.colors.green500
        : props.theme.colors.red500};

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
