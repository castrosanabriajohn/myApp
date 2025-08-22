import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CargaFoto() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Subir foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: '#ddd', padding: 12, borderRadius: 4 },
});
