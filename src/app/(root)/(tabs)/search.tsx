import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function SearchScreen() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={text}
        onChangeText={setText}
      />
      <Text style={styles.result}>You typed: {text || "nothing yet"}</Text>
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  result: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
