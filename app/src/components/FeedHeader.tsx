import { StyleSheet, Text, View } from 'react-native';

export default function FeedHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        <Text style={styles.action}>＋</Text>
      </View>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.side}>
        <Text style={styles.action}>♡</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  side: {
    width: 40,
    alignItems: 'center',
  },
  action: {
    fontSize: 30,
    color: '#000',
  },
});
