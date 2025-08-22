import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function PLNFrase() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>“Trabajando juntos por el futuro”</Text>
      <Link href="/pln/cuenta" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Cuenta regresiva</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/pln/meta" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Meta</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
  button: { backgroundColor: '#ddd', padding: 10, marginTop: 10 },
});
