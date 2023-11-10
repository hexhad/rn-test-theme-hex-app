import { COLORS } from "@constants/colorConstants";
import { Text, TouchableOpacity } from "react-native";
import { Hexagon } from "react-native-feather";

const DrawerPressable = ({
  label = 'label',
  Icon = Hexagon,
  onPress,
  customStyles = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', marginVertical: 10, ...customStyles}}>
      <Text style={{color: COLORS.WHITE, marginRight: 10}}>{label}</Text>
      <Icon stroke={COLORS.WHITE} width={20} height={20} />
    </TouchableOpacity>
  );
};

export default DrawerPressable;
