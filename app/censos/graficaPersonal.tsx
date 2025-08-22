import { View, StyleSheet, Text, ScrollView } from 'react-native';

const data = [40, 80, 120];

export default function GraficaPersonal() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Progreso</Text>
        <View style={styles.chart}>
          {data.map((h, i) => (
            <View key={i} style={styles.barContainer}>
              <View style={[styles.bar, { height: h }]} />
              <Text style={styles.counter}>{h}</Text>
            </View>
          ))}
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
    alignItems: 'center',
  },
  title: { marginBottom: 20, fontSize: 18, color: '#4caf50' },
  chart: { flexDirection: 'row', alignItems: 'flex-end' },
  barContainer: { alignItems: 'center', marginHorizontal: 8 },
  bar: { width: 40, backgroundColor: '#4caf50' },
  counter: { marginTop: 4, color: '#4caf50' },
});
