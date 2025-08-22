import { View, StyleSheet, ScrollView } from 'react-native';
import GradientButton from '../components/GradientButton';

const types = ['.docx', '.csv', 'Foto'];

export default function CargaTipo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {types.map((t) => (
          <GradientButton key={t} title={t} style={styles.button} />
        ))}
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
    alignItems: 'center',
  },
  button: { marginVertical: 8, width: '80%' },
});
