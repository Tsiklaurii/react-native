import { StyleSheet, Text, View } from 'react-native';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
