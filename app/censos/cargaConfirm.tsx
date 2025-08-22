import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import GradientButton from '../components/GradientButton';

const items = ['Documento frontal', 'Documento trasero', 'Selfie'];

export default function CargaConfirm() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);

  const toggle = (index: number) => {
    const next = [...checked];
    next[index] = !next[index];
    setChecked(next);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {items.map((item, i) => (
          <TouchableOpacity key={item} style={styles.row} onPress={() => toggle(i)}>
            <Text>{checked[i] ? '☑' : '☐'} {item}</Text>
          </TouchableOpacity>
        ))}
        <GradientButton title="Subir fotos" style={styles.submit} />
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
  row: { marginBottom: 10 },
  submit: { marginTop: 20 },
});
