import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import GradientButton from '../components/GradientButton';

export default function Digitar() {
  const [id, setId] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Digitar cédula</Text>
        <TextInput
          style={styles.input}
          placeholder="000000000"
          value={id}
          onChangeText={setId}
        />
        <Link href="/censos/digitarResultado" asChild>
          <GradientButton title="Buscar" />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  title: { fontSize: 20, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
});
