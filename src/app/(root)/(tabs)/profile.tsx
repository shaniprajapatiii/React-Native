import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../context/AuthContext";

export default function ProfileScreen() {
  const { user, token, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.label}>WELCOME</Text>
      <Text style={styles.text}>Email: {user?.email}</Text>
      {/* <Text style={styles.label}>JWT Token:</Text> */}
      {/* <Text style={styles.token}>{token}</Text> */}

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  token: {
    fontSize: 12,
    color: "#666",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#ff3b30",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
