import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import {Plus} from 'react-native-feather';

const FloatingActionButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Plus stroke={COLORS.BLACK} width={20} height={20} />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK_ORANGE,
    width: 55,
    height: 55,
    borderRadius: 100,
    position: 'absolute',
    right: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
