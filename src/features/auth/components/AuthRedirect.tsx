import { Link } from "expo-router";
import type { ComponentProps } from "react";
import { Text, XStack } from "tamagui";

interface AuthRedirectProps {
  promptText: string;
  actionText: string;
  href: ComponentProps<typeof Link>["href"];
}

export const AuthRedirect = ({
  promptText,
  actionText,
  href,
}: AuthRedirectProps) => {
  return (
    <XStack
      justify="center"
      items="center"
      gap="$1.5"
      mt="$4"
      flexWrap="nowrap"
    >
      <Text fontSize="$3" color="$color10">
        {promptText}
      </Text>
      <Link href={href} asChild>
        <Text
          fontSize="$3"
          fontWeight="700"
          color="#22c55e"
          numberOfLines={1}
          cursor="pointer"
          pressStyle={{ opacity: 0.7, textDecorationLine: "underline" }}
          hoverStyle={{ textDecorationLine: "underline" }}
        >
          {actionText}
        </Text>
      </Link>
    </XStack>
  );
};
