import { StyleSheet, Text, View } from 'react-native';

const actions = [
  { label: 'Like', symbol: '♡' },
  { label: 'Comment', symbol: '' },
  { label: 'Repost', symbol: '⇄' },
  { label: 'Share', symbol: '➤' },
];

export default function PostActions() {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <View key={action.label} accessible accessibilityLabel={action.label} style={styles.iconContainer}>
          {action.label === 'Comment' ? (
            <View style={styles.commentBubble} />
          ) : (
            <Text style={styles.icon}>{action.symbol}</Text>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 12, paddingTop: 8 },
  iconContainer: { width: 30, height: 32, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 27, color: '#262626' },
  commentBubble: { width: 23, height: 21, borderWidth: 2, borderColor: '#262626', borderRadius: 10 },
});
