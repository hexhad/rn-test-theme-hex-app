import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '@constants/colorConstants';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Lorem ipsum dolor sit amet</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.containerText}>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY,
    paddingHorizontal: 10,
  },
  titleWrapper: {
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 25,
  },
  scrollContainer: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  containerText: {
    fontSize: 17,
  },
});
