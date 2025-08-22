import { View, Text, StyleSheet } from 'react-native';

export default function CuentaRegresiva() {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>12:34</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  time: { fontSize: 48, fontWeight: 'bold' },
});
