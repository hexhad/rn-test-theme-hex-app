import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import Label from '@components/Label';
import {CARD_TYPES} from '@constants/cardTypes';
import ActionButton from '@components/Buttons/ActionButton';
import TaskList from '@components/TaskList';

const MultipleTodoComponent = ({
  onPressActionButton,
  type = CARD_TYPES.NOTE,
  title = '',
  description = '',
  date = '',
  onPressTaskCard,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressTaskCard}>
      <View style={styles.headerWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarPlaceholder}>T</Text>
          </View>
        </View>

        <View style={styles.mainTitle}>
          <Text>{title}</Text>
        </View>
        <View style={styles.headerTime}>
          <Text style={styles.dateText}>{date}</Text>
          <Label type={type} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MultipleTodoComponent;

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.WHITE,
    padding: 13,
    borderRadius: 4,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    flex: 1,
  },
  avatarContainer: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.DARK_ORANGE,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {fontSize: 15, fontWeight: '700', color: COLORS.WHITE},
  mainTitle: {marginHorizontal: 10, flex: 8},
  headerTime: {marginLeft: 'auto', flex: 3, alignItems: 'flex-end'},
  dateText: {lineHeight: 14, fontSize: 14},
});
