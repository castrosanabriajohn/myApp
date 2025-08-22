import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ResumenCanton() {
  const total = 5100;
  const done = 4732;
  const progress = done / total;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.counter}>{done} / {total}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${progress * 100}%` }]} />
        </View>
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
  counter: { fontSize: 24, fontWeight: 'bold', color: '#4caf50', textAlign: 'center', marginBottom: 16 },
  progressBar: {
    height: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: { height: '100%', backgroundColor: '#4caf50' },
});
