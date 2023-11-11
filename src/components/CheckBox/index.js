import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@constants/colorConstants';

const CheckBox = ({title, status = false, index, onPressCheckBox}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPressCheckBox(index);
      }}>
      <View style={styles.border}>
        {status && <View style={styles.tick} />}
      </View>
      <Text style={styles.checkBoxText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CheckBox;

const styles = StyleSheet.create({
  container: {marginVertical: 3, flexDirection: 'row'},
  border: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 2,
  },
  tick: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.BLACK,
    borderRadius: 2,
  },
  checkBoxText: {
    marginLeft: 10,
  },
});
