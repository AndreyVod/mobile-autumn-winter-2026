import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function TextInputScreen() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Как тебя зовут?</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Введи своё имя"
      />

      <Text style={styles.greeting}>
        {name.trim() ? `Привет, ${name}!` : "Привет!"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF7",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#171717",
  },
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "#171717",
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 24,
    color: "#171717",
  },
});
