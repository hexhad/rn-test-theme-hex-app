import {View, Text, StyleSheet} from 'react-native';

const EmptyList = ({placeholder = 'Data not Available'}) => {
  return (
    <View style={styles.container}>
      <Text>{placeholder}</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
