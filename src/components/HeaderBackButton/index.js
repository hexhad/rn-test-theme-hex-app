import { COLORS } from '@constants/colorConstants';
import {RootNavigation} from '@services/RootNavigation';
import {TouchableOpacity} from 'react-native';
import {ChevronLeft} from 'react-native-feather';

const BackButton = () => {
  const onPressBackButton = () => {
    RootNavigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPressBackButton}>
      <ChevronLeft stroke={COLORS.BLACK} width={20} height={20} />
    </TouchableOpacity>
  );
};

export default BackButton;
