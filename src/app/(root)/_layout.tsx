import { Stack, Redirect } from "expo-router";
import { useAuth } from "../../context/AuthContext";

export default function RootLayout() {
  const { token } = useAuth();

  if (!token) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
