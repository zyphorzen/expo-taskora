import { H2, Text, YStack } from "tamagui";

export const Header = ({ h1, text }: { h1: string; text: string }) => {
  return (
    <YStack mb="$8" gap="$2">
      <H2 fontWeight="800" color="$color" letterSpacing={-0.5}>
        {h1}
      </H2>
      <Text color="$color10" fontSize="$4" lineHeight={22}>
        {text}
      </Text>
    </YStack>
  );
};
