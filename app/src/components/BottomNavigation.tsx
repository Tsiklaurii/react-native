import { StyleSheet, Text, View } from 'react-native';

const items = [
  { label: 'Home', symbol: '⌂' },
  { label: 'Reels', symbol: '▷' },
  { label: 'Messages', symbol: '➤' },
  { label: 'Search', symbol: '⌕' },
  { label: 'Profile', symbol: '●' },
];

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item.label} style={styles.item} accessibilityLabel={item.label}>
          <Text style={[styles.symbol, item.label === 'Profile' && styles.profile]}>{item.symbol}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 8,
  },
  item: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  symbol: { fontSize: 24, color: '#262626' },
  profile: { fontSize: 30, color: '#000' },
  label: { fontSize: 10, color: '#262626' },
});
