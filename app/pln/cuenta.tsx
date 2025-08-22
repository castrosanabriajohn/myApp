import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GREEN = '#2e7d32';

export default function CuentaRegresiva() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="leaf-outline" size={24} color={GREEN} />
        <Text style={styles.headerTitle}>PLN</Text>
      </View>
      <View style={styles.card}>
        <Ionicons name="time-outline" size={32} color={GREEN} />
        <Text style={styles.time}>12 días restantes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 8, color: GREEN },
  card: {
    borderWidth: 1,
    borderColor: GREEN,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    width: '100%',
  },
  time: { fontSize: 32, fontWeight: 'bold', color: GREEN, marginTop: 10 },
});
