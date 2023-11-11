import {COLORS} from '@constants/colorConstants';
import {StyleSheet, Text, View} from 'react-native';
import {memo} from 'react';

const Label = ({type}) => {
  const resourceMapper = {
    NOTE: {
      backgroundColor: COLORS.MATTE_RED,
      textColor: COLORS.WHITE,
      name: 'Note',
    },
    NOTE_TASK: {
      backgroundColor: COLORS.MATTE_RED,
      textColor: COLORS.WHITE,
      name: 'Note Task',
    },
    SINGLE_TODO: {
      backgroundColor: COLORS.MATTE_RED,
      textColor: COLORS.WHITE,
      name: 'Todo',
    },
    MULTIPLE_TODO: {
      backgroundColor: COLORS.MATTE_RED,
      textColor: COLORS.WHITE,
      name: 'Todo List',
    },
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: resourceMapper[type].backgroundColor,
        },
      ]}>
      <Text style={[styles.text, {color: resourceMapper[type].textColor}]}>
        {resourceMapper[type].name}
      </Text>
    </View>
  );
};

export default memo(Label);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 14},
});
