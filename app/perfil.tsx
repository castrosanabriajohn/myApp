import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const badges = ['Líder', 'Experto'];
const frasePersonal = 'Censar es mi pasión';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
      <Text style={styles.name}>Juan Censista</Text>
      <Text style={styles.quote}>{frasePersonal}</Text>
      <View style={styles.badgesContainer}>
        {badges.map((b) => (
          <Text key={b} style={styles.badge}>{b}</Text>
        ))}
      </View>
      <TouchableOpacity style={styles.editButton}>
        <FontAwesome name="pencil" size={16} color="#fff" style={styles.editIcon} />
        <Text style={styles.editText}>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 8,
    borderTopColor: '#e0f2e9',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: '#4CAF50',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  quote: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 12,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  badge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 4,
    borderRadius: 16,
    overflow: 'hidden',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  editIcon: { marginRight: 6 },
  editText: { color: '#fff', fontWeight: 'bold' },
});
