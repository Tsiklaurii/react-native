import { ScrollView, StyleSheet } from 'react-native';

import Story from '@/components/Story';
import { stories } from '@/data/stories';

export default function StoriesRow() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row} contentContainerStyle={styles.content}>
      {stories.map((story) => <Story key={story.id} {...story} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { flexGrow: 0 },
  content: { paddingHorizontal: 12, paddingVertical: 12, gap: 8 },
});
