import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { Stack } from "expo-router";

const config = createTamagui(defaultConfig);
type Conf = typeof config;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      {/* <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="task" />
        <Tabs.Screen name="community" />
        <Tabs.Screen name="profile" />
      </Tabs> */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </TamaguiProvider>
  );
}
