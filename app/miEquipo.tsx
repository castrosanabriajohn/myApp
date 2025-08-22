import { View, Text, StyleSheet } from 'react-native';

export default function MiEquipo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Equipo</Text>
      <Text>Integrantes pendientes...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
});
