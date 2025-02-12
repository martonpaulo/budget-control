import { ErrorBoxContainer } from "@/components/ErrorBox/styles";

interface ErrorBoxProps {
  message?: string;
}

const DEFAULT_MESSAGE = "Something went wrong. Please try again later.";

export function ErrorBox({ message = DEFAULT_MESSAGE }: ErrorBoxProps) {
  return (
    <ErrorBoxContainer>
      <p>{message}</p>
    </ErrorBoxContainer>
  );
}
