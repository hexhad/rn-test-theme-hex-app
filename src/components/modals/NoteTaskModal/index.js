import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import ActionButton from '@components/Buttons/ActionButton';
import {X} from 'react-native-feather';
import React from 'react';
import ListItem from '@components/ListItems/FilterItem';

const NoteTaskModal = ({
  visible,
  setVisibility,
  data = [],
  title = 'Note Task',
}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{title}</Text>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={setVisibility}>
              <X stroke={COLORS.BLACK} width={30} height={30} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
              consectetur adipiscing elit,Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>

          <ActionButton
            colorPalette={'positive'}
            onPressActionButton={setVisibility}
            label={'Mark as Done'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default NoteTaskModal;

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
    minWidth: 300,
    maxWidth: 350,
    minHeight: 300,
    maxHeight: 400,
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
  scrollContainer: {
    backgroundColor: COLORS.GRAY,
    padding: 10,
    // height: '100%',
  },
});
