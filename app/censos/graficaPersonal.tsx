import { View, StyleSheet, Text } from 'react-native';

export default function GraficaPersonal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progreso</Text>
      <View style={styles.chart}>
        <View style={[styles.bar, { height: 40 }]} />
        <View style={[styles.bar, { height: 80 }]} />
        <View style={[styles.bar, { height: 120 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 20, fontSize: 18 },
  chart: { flexDirection: 'row', alignItems: 'flex-end' },
  bar: { width: 40, backgroundColor: '#6cf', marginHorizontal: 8 },
});
