import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const opciones = ['Opción A', 'Opción B', 'Opción C'];

export default function Encuesta() {
  const [seleccion, setSeleccion] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {opciones.map((o) => (
        <TouchableOpacity
          key={o}
          style={[styles.button, seleccion === o && styles.selected]}
          onPress={() => setSeleccion(o)}
        >
          <Text style={styles.buttonText}>{o}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  button: {
    padding: 12,
    backgroundColor: '#E8F5E9',
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    borderRadius: 6,
  },
  selected: { backgroundColor: '#C8E6C9' },
  buttonText: { color: '#2e7d32' },
});
