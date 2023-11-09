import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '@navigation/BottomNavigation';
import { SCREENS } from '@constants/screenConstants';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const MainStack = () => {
    
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={SCREENS.AUTH_STACK} component={BottomTabs} />
      </Stack.Navigator>
  );
};

export default MainStack;