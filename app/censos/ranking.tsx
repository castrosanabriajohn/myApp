import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ranking = [
  { name: 'Ana', pct: 90 },
  { name: 'Luis', pct: 75 },
  { name: 'Carlos', pct: 60 },
];

export default function Ranking() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {ranking.map((r, i) => (
          <View key={r.name} style={styles.row}>
            <Text style={styles.name}>#{i + 1} {r.name}</Text>
            <View style={styles.barWrapper}>
              <View style={[styles.bar, { width: `${r.pct}%` }]} />
            </View>
            <Text style={styles.pct}>{r.pct}%</Text>
          </View>
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
  },
  row: { marginBottom: 12 },
  name: { marginBottom: 4 },
  barWrapper: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
  },
  bar: { height: '100%', backgroundColor: '#4caf50' },
  pct: { marginTop: 4, color: '#4caf50' },
});
