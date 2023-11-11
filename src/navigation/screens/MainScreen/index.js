import {SafeAreaView, StyleSheet, View} from 'react-native';
import {COLORS} from '@constants/colorConstants';
import {RootNavigation} from '@services/RootNavigation';
import {SCREENS} from '@constants/screenConstants';
import SearchBar from '@components/SearchBar';
import FloatingActionButton from '@components/Buttons/FloatingActionButton';
import ListRenderer from '@components/ListRenderer';
import Loader from '@components/Loader';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '@rtk/Actions/dataActions';
import FilterModal from '@components/modals/FilterModal';
import {getCategories} from '@rtk/selectors';
import NoteTaskComponent from '@components/ListItems/NoteTaskComponent';
import NoteTaskModal from '@components/modals/NoteTaskModal';
import {CARD_TYPES} from '@constants/cardTypes';
import TaskModal from '@components/modals/TaskModal';

const MainScreen = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(state => state.data);
  const categories = useSelector(getCategories);

  const [filterVisibility, setFilterVisibility] = useState(false);
  const [noteTaskVisibility, setNoteTaskVisibility] = useState(false);
  const [taskVisibility, setTaskVisibility] = useState(false);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const onPressToNavigate = () => {
    RootNavigation.navigate(SCREENS.DETAILS_SCREEN, {});
  };
  const onPressFAB = () => {};

  const handleFilterVisibility = () => {
    setFilterVisibility(false);
  };
  const handleOnPressFilterButton = () => {
    setFilterVisibility(true);
  };

  const handleNoteTaskVisibility = () => {
    setNoteTaskVisibility(false);
  };
  const handleTaskVisibility = () => {
    setTaskVisibility(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onPressFilterButton={handleOnPressFilterButton} />
      <ListRenderer
        data={data}
        onPressToNavigate={onPressToNavigate}
        onRefresh={() => dispatch(getData())}
        refreshLoader={loading}
        footerComponent={<View style={{height: 100}} />}
        onPressActions={e => {
          switch (e) {
            case CARD_TYPES.NOTE_TASK:
              return setNoteTaskVisibility(true);
            case CARD_TYPES.MULTIPLE_TODO:
              return setTaskVisibility(true);
            default:
              return;
          }
        }}
      />
      <FloatingActionButton onPress={onPressFAB} />
      <Loader visible={loading} />
      <FilterModal
        data={categories}
        visible={filterVisibility}
        setVisibility={handleFilterVisibility}
      />
      <NoteTaskModal
        visible={noteTaskVisibility}
        setVisibility={handleNoteTaskVisibility}
      />
      <TaskModal
        data={[
          {task: 'Task 1', isDone: true, index: 0},
          {task: 'Task 2', isDone: true, index: 1},
          {task: 'Task 3', isDone: false, index: 2},
          {task: 'Task 4', isDone: false, index: 3},
        ]}
        visible={taskVisibility}
        setVisibility={handleTaskVisibility}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.GRAY, flex: 1},
});
