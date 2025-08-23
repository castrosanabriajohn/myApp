import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const GREEN = '#2e7d32';

export default function PLNFrase() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="leaf-outline" size={24} color={GREEN} />
        <Text style={styles.headerTitle}>PLN</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>“Trabajando juntos por el futuro”</Text>
      </View>
      <Link href="/pln/cuenta" asChild>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="time-outline"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Cuenta regresiva</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/pln/meta" asChild>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="flag-outline"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Meta</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
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
    marginBottom: 20,
    width: '100%',
  },
  text: { fontSize: 18, textAlign: 'center', color: GREEN },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GREEN,
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
    width: '100%',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', marginLeft: 6 },
  buttonIcon: { marginRight: 6 },
});
