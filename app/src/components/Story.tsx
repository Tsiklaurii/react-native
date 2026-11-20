import { StyleSheet, Text, View } from 'react-native';

type StoryProps = {
  name: string;
  initials: string;
  color: string;
  isOwn?: boolean;
};

export default function Story({ name, initials, color, isOwn = false }: StoryProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.ring, isOwn && styles.ownRing]}>
        <View style={[styles.avatar, { backgroundColor: color }]}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
        {isOwn && <Text style={styles.addBadge}>+</Text>}
      </View>
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 76, alignItems: 'center', gap: 5 },
  ring: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#d83175', padding: 3 },
  ownRing: { borderColor: 'transparent' },
  avatar: { flex: 1, borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
  initials: { fontSize: 24, fontWeight: '600', color: '#333' },
  addBadge: { position: 'absolute', right: 0, bottom: 0, width: 22, height: 22, borderRadius: 11, overflow: 'hidden', backgroundColor: '#0095f6', color: '#fff', textAlign: 'center', fontSize: 18, lineHeight: 22, borderWidth: 2, borderColor: '#fff' },
  name: { fontSize: 12, color: '#262626' },
});
