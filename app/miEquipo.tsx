import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const teamMembers = [
  { id: '1', name: 'Juan Pérez', role: 'Desarrollador' },
  { id: '2', name: 'Ana Gómez', role: 'Diseñadora' },
  { id: '3', name: 'Luis Torres', role: 'Product Manager' },
];

export default function MiEquipo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Equipo</Text>
      {teamMembers.map((member) => (
        <View key={member.id} style={styles.memberRow}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver detalles</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#064635',
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#a5d6a7',
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: '#eeeeee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  role: {
    color: 'green',
  },
  button: {
    backgroundColor: '#a5d6a7',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#064635',
    fontWeight: '600',
  },
});
