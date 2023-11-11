import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';

import {useRef} from 'react';
import EmptyList from '@components/Placeholders/EmptyList';
import NoteComponent from '@components/ListItems/NoteComponent';
import {CARD_TYPES} from '@constants/cardTypes';
import NoteTaskComponent from '@components/ListItems/NoteTaskComponent';
import MultipleTodoComponent from '@components/ListItems/MultipleTodoComponent';

const ListRenderer = ({
  data = [],
  onPressToNavigate,
  onRefresh,
  refreshLoader = false,
  headerComponent,
  footerComponent,
  onPressActions,
}) => {
  const flatListRef = useRef();

  const renderItem = ({item, index}) => {
    const {description, date, title, type, uuid} = item;

    switch (type) {
      case CARD_TYPES.NOTE:
        return (
          <NoteComponent
            {...{
              date: date,
              description: description,
              title: title,
              type: type,
              onPressActionButton: () => onPressToNavigate(CARD_TYPES.NOTE),
            }}
            key={index}
          />
        );
      case CARD_TYPES.NOTE_TASK:
        return (
          <NoteTaskComponent
            {...{
              date: date,
              description: description,
              title: title,
              type: type,
              onPressNoteTask: () => onPressActions(CARD_TYPES.NOTE_TASK),
            }}
            key={index}
          />
        );
      case CARD_TYPES.MULTIPLE_TODO:
        return (
          <MultipleTodoComponent
            {...{
              date: date,
              description: description,
              title: title,
              type: type,
              onPressTaskCard: () =>
                onPressActions(CARD_TYPES.MULTIPLE_TODO),
            }}
            key={index}
          />
        );
      default:
        return null;
    }
  };

  const itemSeparator = () => <View style={styles.separatorComponent} />;

  return (
    <View style={styles.listContainer}>
      {data.length === 0 ? (
        <EmptyList />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshLoader} onRefresh={onRefresh} />
          }
          ref={flatListRef}
          data={data}
          ItemSeparatorComponent={itemSeparator}
          renderItem={renderItem}
          ListHeaderComponent={headerComponent}
          ListFooterComponent={footerComponent}
          // stickyHeaderIndices={[1]}
          initialNumToRender={60}
          onScrollEndDrag={() => {}}
          onScrollBeginDrag={() => {}}
        />
      )}
    </View>
  );
};

export default ListRenderer;

const styles = StyleSheet.create({
  separatorComponent: {
    height: 10,
  },
  listContainer: {
    marginVertical: 10,
  },
});
