import { StyleSheet, Text, View } from 'react-native';

const actions = [
  { label: 'Like', symbol: '♡' },
  { label: 'Comment', symbol: '💬' },
  { label: 'Repost', symbol: '⇄' },
  { label: 'Share', symbol: '➤' },
];

export default function PostActions() {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <Text key={action.label} accessibilityLabel={action.label} style={styles.icon}>
          {action.symbol}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 18, paddingHorizontal: 12, paddingTop: 8 },
  icon: { fontSize: 27, color: '#262626' },
});
