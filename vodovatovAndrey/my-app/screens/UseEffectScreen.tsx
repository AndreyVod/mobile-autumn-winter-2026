import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function UseEffectScreen() {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(["Первый элемент", "Второй элемент", "Третий элемент"]);
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Имитация загрузки</Text>

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#171717" />
          <Text style={styles.text}>Загрузка...</Text>
        </View>
      ) : (
        items.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF7",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#171717",
    textAlign: "center",
    marginBottom: 24,
  },
  loading: {
    alignItems: "center",
    gap: 12,
  },
  text: {
    fontSize: 18,
    color: "#171717",
  },
  card: {
    backgroundColor: "#FFD21F",
    borderWidth: 3,
    borderColor: "#171717",
    borderRadius: 10,
    padding: 18,
    marginBottom: 12,
  },
});
