import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const mock = {
  nombre: 'Juan Perez',
  direccion: 'San José',
};

export default function DigitarResultado() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Nombre: {mock.nombre}</Text>
      <Text style={styles.field}>Dirección: {mock.direccion}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Censar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  field: { marginBottom: 10 },
  button: { backgroundColor: '#ccc', padding: 10, marginTop: 20, alignItems: 'center' },
});
