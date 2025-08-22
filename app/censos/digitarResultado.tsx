import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GradientButton from '../components/GradientButton';

const mock = {
  nombre: 'Juan Perez',
  direccion: 'San José',
};

export default function DigitarResultado() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.field}>Nombre: {mock.nombre}</Text>
        <Text style={styles.field}>Dirección: {mock.direccion}</Text>
        <GradientButton title="Censar" />
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
  field: { marginBottom: 10 },
});
