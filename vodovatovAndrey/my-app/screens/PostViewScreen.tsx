import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";

import { getPost, Post } from "../api";

export default function PostViewScreen({ route, navigation }: any) {
  const id = route.params.id as number;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      try {
        setLoading(true);
        setError("");

        const data = await getPost(id);

        if (!cancelled) {
          setPost(data);
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "Не удалось загрузить пост",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPost();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#171717" />
        <Text style={styles.message}>Загрузка поста...</Text>
      </View>
    );
  }

  if (error || !post) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error || "Пост не найден"}</Text>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Назад</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.date}>
        {new Date(post.created_at).toLocaleDateString("ru-RU")}
      </Text>

      <Text style={styles.content}>{post.content}</Text>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Назад</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF7",
    padding: 20,
  },
  center: {
    flex: 1,
    backgroundColor: "#FFFDF7",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#171717",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 20,
  },
  content: {
    fontSize: 17,
    lineHeight: 26,
    color: "#171717",
    marginBottom: 24,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#FFD21F",
    borderWidth: 3,
    borderColor: "#171717",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#171717",
  },
  error: {
    fontSize: 17,
    color: "#C62828",
    textAlign: "center",
  },
  message: {
    fontSize: 17,
    color: "#171717",
  },
});
