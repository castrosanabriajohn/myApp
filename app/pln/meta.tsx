import { View, Text, StyleSheet } from 'react-native';

export default function Meta() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>75% 376/500</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
