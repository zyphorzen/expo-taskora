import type { ComponentProps } from "react";
import { Button, Spinner } from "tamagui";

type TamaguiButtonProps = ComponentProps<typeof Button>;

interface SubmitButtonProps extends TamaguiButtonProps {
  isLoading?: boolean;
  label?: string;
}

export const SubmitButton = ({
  isLoading = false,
  label = "Submit",
  disabled,
  ...props
}: SubmitButtonProps) => {
  return (
    <Button
      size="$4"
      bg="#22c55e"
      pressStyle={{ bg: "#16a34a" }}
      fontWeight="700"
      color="white"
      disabled={isLoading || disabled}
      opacity={isLoading ? 0.7 : 1}
      icon={isLoading ? <Spinner color="white" /> : undefined}
      {...props}
    >
      {isLoading ? "Loading..." : label}
    </Button>
  );
};
