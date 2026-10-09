import { Separator, Text, XStack } from "tamagui";

export const OrDivider = ({ label }: { label: string }) => {
  return (
    <XStack items="center" width="100%" gap="$3" my="$2">
      <Separator flex={1} borderColor="$borderColor" />
      <Text
        color="$color9"
        fontSize="$2"
        fontWeight="600"
        textTransform="uppercase"
      >
        {label}
      </Text>
      <Separator flex={1} borderColor="$borderColor" />
    </XStack>
  );
};
