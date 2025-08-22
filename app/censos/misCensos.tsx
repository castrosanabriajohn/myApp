import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const data = ['Ana', 'Luis', 'Carlos'];

export default function MisCensos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <View
              style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}
            >
              <Text>{item}</Text>
            </View>
          )}
        />
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
  row: { padding: 10 },
  rowEven: { backgroundColor: '#e8f5e9' },
  rowOdd: { backgroundColor: '#fff' },
});
