import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FeedHeader from '@/components/FeedHeader';
import Post from '@/components/Post';
import StoriesRow from '@/components/StoriesRow';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" />
      <FeedHeader />
      <ScrollView>
        <StoriesRow />
        <Post
          username="mariam"
          imageUrl="https://picsum.photos/id/1018/800/800"
          imageDescription="A mountain landscape"
          caption="A little time outdoors."
        />
        <Post
          username="nika"
          imageUrl="https://hips.hearstapps.com/clv.h-cdn.co/assets/16/18/gettyimages-586890581.jpg?crop=0.668xw:1.00xh;0.219xw,0"
          imageDescription="A mountain landscape"
          caption="<3 <3 <3>"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
