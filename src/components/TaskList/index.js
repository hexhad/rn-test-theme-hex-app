import CheckBox from '@components/CheckBox';
const TaskList = ({list = []}, onPressCheckBox) => {
  return list.map((item, index) => (
    <CheckBox key={index} title={item.task} status={item.isDone} index={item.index} onPressCheckBox={onPressCheckBox}/>
  ));
};
export default TaskList;
