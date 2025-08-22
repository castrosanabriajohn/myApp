import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const opciones = ['Opción A', 'Opción B', 'Opción C'];

export default function Encuesta() {
  const [enviada, setEnviada] = useState(false);

  if (enviada) {
    return (
      <View style={styles.container}>
        <Text>Respuesta enviada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {opciones.map((o) => (
        <TouchableOpacity key={o} style={styles.button} onPress={() => setEnviada(true)}>
          <Text>{o}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  button: { padding: 12, backgroundColor: '#ddd', marginVertical: 8, width: '80%', alignItems: 'center' },
});
