import { Header } from "@/components/common/Header";
import { OrDivider } from "@/components/common/OrDivider";
import { FormInput } from "@/components/forms/FormInput";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { AuthRedirect } from "@/features/auth/components/AuthRedirect";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Form, Text, YStack } from "tamagui";

export const LoginScreen = () => {
  const r = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeSubmit = (data: { email: string; password: string }) => {
    console.log(data);
    r.replace("/(tabs)");
  };
  return (
    <YStack flex={1} justify="center" px="$6" py="$8" bg="$background">
      <Header
        h1="Welcome Back"
        text="Welcome back! Ready to manage your times?"
      />

      <Form onSubmit={() => hanldeSubmit({ email, password })}>
        <YStack gap="$4">
          <FormInput
            label="Email"
            placeholder="name@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            isRequired
          />

          <FormInput
            label="Password"
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            isRequired
            isPassword
            rightLabel={
              <Text
                fontSize="$2"
                fontWeight="600"
                color="$color10"
                pressStyle={{ color: "$color", opacity: 0.8 }}
                cursor="pointer"
                onPress={() => console.log("Forgot Password pressed")}
              >
                Forgot password?
              </Text>
            }
          />

          <YStack mt="$2" gap="$3">
            <Form.Trigger asChild>
              <SubmitButton label="Login" isLoading={false} />
            </Form.Trigger>

            <OrDivider label="or" />
            <Button
              size="$4"
              variant="outlined"
              borderColor="$borderColor"
              fontWeight="600"
              color="$color"
              pressStyle={{ bg: "$backgroundHover" }}
            >
              Continue with Google
            </Button>
            <AuthRedirect
              promptText="Don't have an account?"
              actionText="Sign Up"
              href="/"
            />
          </YStack>
        </YStack>
      </Form>
    </YStack>
  );
};
