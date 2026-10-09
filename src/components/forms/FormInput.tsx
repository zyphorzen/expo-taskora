import { Eye, EyeOff } from "@tamagui/lucide-icons-2";
import { useState, type ComponentProps, type ReactNode } from "react";
import { Button, Input, Label, Text, XStack, YStack } from "tamagui";

type TamaguiInputProps = ComponentProps<typeof Input>;

export interface FormInputProps extends TamaguiInputProps {
  label: string;
  error?: string;
  isRequired?: boolean;
  rightLabel?: ReactNode;
  isPassword?: boolean;
}

export const FormInput = ({
  label,
  error,
  isRequired,
  rightLabel,
  isPassword = false,
  id,
  secureTextEntry,
  type,
  ...inputProps
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id;

  const isSecure = isPassword ? !showPassword : secureTextEntry;

  return (
    <YStack gap="$1.5" width="100%">
      <XStack justify="space-between" items="center">
        <Label htmlFor={inputId} size="$3" fontWeight="600" color="$color11">
          {label}
          {isRequired && <Text color="$red10"> *</Text>}
        </Label>

        {rightLabel}
      </XStack>

      <XStack position="relative" items="center" width="100%">
        <Input
          id={inputId}
          size="$4"
          width="100%"
          secureTextEntry={isSecure}
          placeholderTextColor="$color9"
          pr={isPassword ? "$9" : "$3"}
          borderColor={error ? "$red8" : "$borderColor"}
          focusStyle={{
            borderColor: error ? "$red9" : "$colorFocus",
          }}
          {...inputProps}
        />

        {isPassword && (
          <Button
            size="$3"
            chromeless
            position="absolute"
            r="$2"
            p="$1"
            circular
            aria-label={showPassword ? "Hide password" : "Show password"}
            onPress={() => setShowPassword((prev) => !prev)}
            icon={
              showPassword ? (
                <EyeOff size={18} color="$color10" />
              ) : (
                <Eye size={18} color="$color10" />
              )
            }
          />
        )}
      </XStack>

      {error ? (
        <Text color="$red10" fontSize="$2">
          {error}
        </Text>
      ) : null}
    </YStack>
  );
};
