import { View, Text, Pressable, StyleSheet, Alert } from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Добро пожаловать!</Text>

        <Text style={styles.subtitle}>Мобильная разработка</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Счетчик")}
        >
          <Text style={styles.buttonText}>Начать</Text>
        </Pressable>
      </View>
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

  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#FFD21F",
    borderWidth: 3,
    borderColor: "#111111",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111111",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#111111",
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 13,
  },

  buttonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111111",
  },
});
