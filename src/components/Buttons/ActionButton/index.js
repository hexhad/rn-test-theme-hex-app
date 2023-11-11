import {COLORS} from '@constants/colorConstants';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const COLOR_PAIR = {
  default: {color: COLORS.WHITE, backgroundColor: COLORS.BLACK},
  positive: {
    color: COLORS.BUTTON_GREEN_TEXT,
    backgroundColor: COLORS.BUTTON_GREEN_BACKGROUND,
  },
  negative: {
    color: COLORS.BUTTON_RED_TEXT,
    backgroundColor: COLORS.BUTTON_RED_BACKGROUND,
  },
};

const ActionButton = ({
  label = 'Button',
  onPressActionButton,
  customStyles = {},
  colorPalette = 'default',
}) => {
  return (
    <TouchableOpacity
      onPress={onPressActionButton}
      style={[
        styles.container,
        customStyles,
        {backgroundColor: COLOR_PAIR[colorPalette].backgroundColor},
      ]}>
      <Text style={[styles.text, {color: COLOR_PAIR[colorPalette].color}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: COLORS.WHITE},
});
