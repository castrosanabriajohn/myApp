import { View, Text, StyleSheet, Image } from 'react-native';

const badges = ['Líder', 'Experto'];

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
      <Text style={styles.name}>Juan Censista</Text>
      {badges.map((b) => (
        <Text key={b} style={styles.badge}>{b}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  badge: { backgroundColor: '#eee', padding: 6, marginVertical: 2, borderRadius: 4 },
});
