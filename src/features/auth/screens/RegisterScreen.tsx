import { Header } from "@/components/common/Header";
import { OrDivider } from "@/components/common/OrDivider";
import { FormCheckbox } from "@/components/forms/FormCheckbox";
import { FormInput } from "@/components/forms/FormInput";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { AuthRedirect } from "@/features/auth/components/AuthRedirect";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Form, Text, YStack } from "tamagui";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const hanldeSubmit = (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    console.log(data);
  };
  return (
    <YStack flex={1} justify="center" px="$6" py="$8" bg="$background">
      <Header
        h1="Create Account Now"
        text="Create an Account Now start managing times!"
      />

      <Form onSubmit={() => hanldeSubmit({ username, email, password })}>
        <YStack gap="$4">
          <FormInput
            label="Username"
            placeholder="johdoe"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
            isRequired
          />

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
          />

          <FormCheckbox
            checked={checked}
            onCheckedChange={(val) => setChecked(Boolean(val))}
            label={
              <>
                I agree to{" "}
                <Link href="/" asChild>
                  <Text
                    fontWeight="600"
                    color="#22c55e"
                    cursor="pointer"
                    pressStyle={{
                      opacity: 0.7,
                      textDecorationLine: "underline",
                    }}
                    hoverStyle={{ textDecorationLine: "underline" }}
                  >
                    Terms
                  </Text>
                </Link>{" "}
                and{" "}
                <Link href="/" asChild>
                  <Text
                    fontWeight="600"
                    color="#22c55e"
                    cursor="pointer"
                    pressStyle={{
                      opacity: 0.7,
                      textDecorationLine: "underline",
                    }}
                    hoverStyle={{ textDecorationLine: "underline" }}
                  >
                    Privacy Policy
                  </Text>
                </Link>
                .
              </>
            }
          />

          <YStack mt="$2" gap="$3">
            <Form.Trigger asChild>
              <SubmitButton label="Register" isLoading={false} />
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
              promptText="Already have an account?"
              actionText="Sign In"
              href="/login"
            />
          </YStack>
        </YStack>
      </Form>
    </YStack>
  );
};
