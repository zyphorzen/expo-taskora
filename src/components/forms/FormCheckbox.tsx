import { Check } from "@tamagui/lucide-icons-2";
import type { ComponentProps, ReactNode } from "react";
import { Checkbox, Text, XStack, YStack } from "tamagui";

type TamaguiCheckboxProps = ComponentProps<typeof Checkbox>;

export interface FormCheckboxProps extends TamaguiCheckboxProps {
  label: ReactNode;
  error?: string;
  id?: string;
}

export const FormCheckbox = ({
  label,
  error,
  id,
  size = "$4",
  ...checkboxProps
}: FormCheckboxProps) => {
  return (
    <YStack gap="$1">
      <XStack items="center" gap="$2.5">
        <Checkbox
          id={id}
          size={size}
          borderColor={error ? "$red8" : "$borderColor"}
          focusStyle={{ borderColor: "$colorFocus" }}
          {...checkboxProps}
        >
          <Checkbox.Indicator>
            <Check size={14} color="$color" />
          </Checkbox.Indicator>
        </Checkbox>

        <Text fontSize="$3" color="$color11" select="none" shrink={1}>
          {label}
        </Text>
      </XStack>

      {error ? (
        <Text color="$red10" fontSize="$2" ml="$7">
          {error}
        </Text>
      ) : null}
    </YStack>
  );
};
