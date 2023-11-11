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

const FilterModal = ({visible, setVisibility, data = []}) => {
  const renderButtons = (item, index) => {
    return <ListItem label={item} key={index} />;
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Filter</Text>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={setVisibility}>
              <X stroke={COLORS.BLACK} width={30} height={30} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.wrappingItems}>
            {data.map((item, index) => renderButtons(item, index))}
          </ScrollView>
          <ActionButton onPressActionButton={setVisibility} label={'Filter'} />
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

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
  wrappingItems: {flexDirection: 'row', flexWrap: 'wrap'},
});
