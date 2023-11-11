import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import ActionButton from '@components/Buttons/ActionButton';
import {X} from 'react-native-feather';
import React from 'react';
import TaskList from '@components/TaskList';

const TaskModal = ({visible, setVisibility, data = []}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Todo List</Text>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={setVisibility}>
              <X stroke={COLORS.BLACK} width={30} height={30} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <TaskList
              onPressCheckBox={e => {
                console.log(e);
              }}
              list={data}
            />
          </ScrollView>
          <ActionButton onPressActionButton={setVisibility} label={'Close'} />
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MODAL_BLACK,
  },
  wrapper: {
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    opacity: 1,
    minWidth: 300,
    maxWidth: 350,
    minHeight: 300,
    padding: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    marginVertical: 10,
  },
  buttonWrapper: {
    marginLeft: 'auto',
  },
});
