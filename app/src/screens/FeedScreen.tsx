import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '@/components/BottomNavigation';
import FeedHeader from '@/components/FeedHeader';
import Post from '@/components/Post';
import StoriesRow from '@/components/StoriesRow';
import { posts } from '@/data/posts';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <FeedHeader />
        <ScrollView>
          <StoriesRow />
          {posts.map((post) => <Post key={post.id} {...post} />)}
        </ScrollView>
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
});
