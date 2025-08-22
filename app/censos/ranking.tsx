import { View, Text, StyleSheet } from 'react-native';

const ranking = [
  { name: 'Ana', pct: 90 },
  { name: 'Luis', pct: 75 },
  { name: 'Carlos', pct: 60 },
];

export default function Ranking() {
  return (
    <View style={styles.container}>
      {ranking.map((r, i) => (
        <Text key={r.name} style={styles.item}>
          #{i + 1} {r.name} - {r.pct}%
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { marginBottom: 8 },
});
