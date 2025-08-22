import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const flows = [
  { label: 'Digitar', path: '/censos/digitar' },
  { label: 'Carga Tipo', path: '/censos/cargaTipo' },
  { label: 'Gráfica Personal', path: '/censos/graficaPersonal' },
  { label: 'Mis Censos', path: '/censos/misCensos' },
  { label: 'Resumen Cantón', path: '/censos/resumenCanton' },
  { label: 'Ranking', path: '/censos/ranking' },
];

export default function CensosHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Censos</Text>
      {flows.map((f) => (
        <Link key={f.path} href={f.path} asChild>
          <TouchableOpacity style={styles.button}>
            <Text>{f.label}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  button: {
    padding: 12,
    backgroundColor: '#ddd',
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
});
