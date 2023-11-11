import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import {Sliders} from 'react-native-feather';

const SearchBar = ({onPressFilterButton}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={{padding: 0, margin: 0, height: 30, flex: 1}}
      />
      <TouchableOpacity style={{marginLeft: 'auto'}} onPress={onPressFilterButton}>
        <Sliders stroke={COLORS.BLACK} width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
