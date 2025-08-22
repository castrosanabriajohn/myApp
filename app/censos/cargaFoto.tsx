import { View, StyleSheet, ScrollView } from 'react-native';
import GradientButton from '../components/GradientButton';

export default function CargaFoto() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <GradientButton title="Subir foto" />
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
});
