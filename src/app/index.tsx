import { Redirect } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { token } = useAuth();
  return token ? <Redirect href="/(root)/(tabs)" /> : <Redirect href="/(auth)/sign-in" />;
}
