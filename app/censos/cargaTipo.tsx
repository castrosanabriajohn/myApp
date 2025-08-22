import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const types = ['.docx', '.csv', 'Foto'];

export default function CargaTipo() {
  return (
    <View style={styles.container}>
      {types.map((t) => (
        <TouchableOpacity key={t} style={styles.button}>
          <Text>{t}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: '#ddd', padding: 12, marginVertical: 8, width: '80%', alignItems: 'center' },
});
