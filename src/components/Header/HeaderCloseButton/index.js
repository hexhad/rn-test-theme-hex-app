import {COLORS} from '@constants/colorConstants';
import {RootNavigation} from '@services/RootNavigation';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {X} from 'react-native-feather';

const HeaderBackButton = () => {
  const onPressBackButton = () => {
    RootNavigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPressBackButton} style={styles.container}>
      <X stroke={COLORS.BLACK} width={25} height={25} />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});
