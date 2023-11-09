import  { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { toggleState } from '@rtk/slices/drawerSlice';
import { COLORS } from "@constants/colorConstants";


const MainScreen = () => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView>
            <Text>MainScreen</Text>
            <TouchableOpacity  onPress={()=>dispatch(toggleState(true))}>
          <Text style={{backgroundColor:COLORS.WHITE}}>HEx Test UI</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
}

export default MainScreen;