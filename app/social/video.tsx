import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Video() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.image} />
      <TouchableOpacity style={styles.button}>
        <Text>▶️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 200, marginBottom: 20 },
  button: { padding: 10, backgroundColor: '#ddd', borderRadius: 4 },
});
