import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Digitar() {
  const [id, setId] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digitar cédula</Text>
      <TextInput
        style={styles.input}
        placeholder="000000000"
        value={id}
        onChangeText={setId}
      />
      <Link href="/censos/digitarResultado" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Buscar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
  button: { backgroundColor: '#ccc', padding: 10, alignItems: 'center' },
});
