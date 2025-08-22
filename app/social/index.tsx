import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const posts = [
  { id: 1, text: 'Primer post', likes: 3, comments: 1 },
  { id: 2, text: 'Segundo post', likes: 5, comments: 2 },
];

export default function Feed() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((p) => (
        <View key={p.id} style={styles.card}>
          <Text>{p.text}</Text>
          <Text>{p.likes} likes, {p.comments} comentarios</Text>
        </View>
      ))}
      <Link href="/social/encuesta" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Ir a encuesta</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/social/video" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Ver video</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: { padding: 12, backgroundColor: '#eee', marginBottom: 10 },
  button: { marginTop: 10, padding: 12, backgroundColor: '#ddd', alignItems: 'center' },
});
