import {COLORS} from '@constants/colorConstants';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Settings} from 'react-native-feather';
import React from 'react';

const HeaderRightLogo = ({onPressHeaderRight}) => {
  return (
    <TouchableOpacity
      onPress={onPressHeaderRight}
      style={styles.marginRightAdjust}>
      <Settings stroke={COLORS.BLACK} width={20} height={20} />
    </TouchableOpacity>
  );
};

export default HeaderRightLogo;

const styles = StyleSheet.create({
  marginRightAdjust: {marginRight: 10},
});
