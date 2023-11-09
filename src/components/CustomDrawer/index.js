import React, { memo } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import {COLORS} from '@constants/colorConstants';

const CustomDrawer = ({onPress}) => {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.BLACK}}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={onPress}>
          <Text style={{backgroundColor: COLORS.WHITE}}>HEx Test UI</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default memo(CustomDrawer);