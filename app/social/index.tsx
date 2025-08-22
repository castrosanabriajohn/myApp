import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const posts = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/100?img=1',
    name: 'Ana',
    time: 'Hace 2h',
    text: 'Disfrutando el día #feliz #verde',
    likes: 3,
    comments: 1,
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/100?img=2',
    name: 'Luis',
    time: 'Hace 5h',
    text: 'Segundo post con #expo',
    likes: 5,
    comments: 2,
  },
];

const renderTextWithHashtags = (text: string) =>
  text.split(/(#[^\s#]+)/g).map((part, index) =>
    part.startsWith('#') ? (
      <Text key={index} style={styles.hashtag}>
        {part}
      </Text>
    ) : (
      part
    ),
  );

export default function Feed() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((p) => (
        <View key={p.id} style={styles.card}>
          <View style={styles.header}>
            <Image source={{ uri: p.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.time}>{p.time}</Text>
            </View>
          </View>
          <Text style={styles.postText}>{renderTextWithHashtags(p.text)}</Text>
          <View style={styles.counts}>
            <View style={styles.countItem}>
              <Ionicons name="heart" size={16} color="#2e7d32" />
              <Text style={styles.countText}>{p.likes}</Text>
            </View>
            <View style={styles.countItem}>
              <Ionicons name="chatbubble" size={16} color="#2e7d32" />
              <Text style={styles.countText}>{p.comments}</Text>
            </View>
          </View>
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
  card: {
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#a5d6a7',
    borderRadius: 8,
    marginBottom: 10,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  name: { color: '#2e7d32', fontWeight: 'bold' },
  time: { color: '#777' },
  postText: { color: '#000', marginBottom: 8 },
  hashtag: { color: '#2e7d32' },
  counts: { flexDirection: 'row' },
  countItem: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  countText: { marginLeft: 4, color: '#2e7d32' },
  button: { marginTop: 10, padding: 12, backgroundColor: '#ddd', alignItems: 'center' },
});
