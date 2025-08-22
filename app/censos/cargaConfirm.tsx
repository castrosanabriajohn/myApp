import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const items = ['Documento frontal', 'Documento trasero', 'Selfie'];

export default function CargaConfirm() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);

  const toggle = (index: number) => {
    const next = [...checked];
    next[index] = !next[index];
    setChecked(next);
  };

  return (
    <View style={styles.container}>
      {items.map((item, i) => (
        <TouchableOpacity key={item} style={styles.row} onPress={() => toggle(i)}>
          <Text>{checked[i] ? '☑' : '☐'} {item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button}>
        <Text>Subir fotos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  row: { marginBottom: 10 },
  button: { marginTop: 20, backgroundColor: '#ddd', padding: 12, alignItems: 'center' },
});
