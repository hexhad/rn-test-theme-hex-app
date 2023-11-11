import {COLORS} from '@constants/colorConstants';
import {Text, View} from 'react-native';
import {Hexagon} from 'react-native-feather';
import React from 'react';

const HeaderLogo = () => {
  return (
    <View
      style={{
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Hexagon stroke={COLORS.BLACK} width={20} height={20} />
      <Text style={{fontSize: 20, marginLeft: 10}}>Untitled</Text>
    </View>
  );
};

export default HeaderLogo;
