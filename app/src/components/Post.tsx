import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type PostProps = {
  username: string;
  imageUrl: string;
  imageDescription: string;
  caption: string;
};

export default function Post({ username, imageUrl, imageDescription, caption }: PostProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{username.charAt(0).toUpperCase()}</Text>
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} contentFit="cover" accessibilityLabel={imageDescription} />
      <Text style={styles.caption}>
        <Text style={styles.username}>{username} </Text>{caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 16 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 12 },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#eac6b9', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontWeight: '600', color: '#333' },
  username: { fontWeight: 'bold', color: '#262626' },
  image: { width: '100%', aspectRatio: 1, backgroundColor: '#eee' },
  caption: { paddingHorizontal: 12, paddingTop: 12, color: '#262626' },
});
