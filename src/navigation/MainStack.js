import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from '@navigation/BottomNavigation';
import {SCREENS} from '@constants/screenConstants';
import DetailsScreen from '@navigation/screens/DetailsScreen';
import {COLORS} from '@constants/colorConstants';
import BackButton from '@components/HeaderBackButton';
import HeaderCloseButton from '@components/HeaderCloseButton';
import WebViewModalScreen from "@navigation/screens/WebViewModalScreen/WebViewModalScreen";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.SECURED_STACK}>
      <Stack.Group>
        <Stack.Screen name={SCREENS.SECURED_STACK} component={BottomTabs} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name={SCREENS.DETAILS_SCREEN}
          component={DetailsScreen}
          options={{
            headerLeft: () => {},
            headerRight: () => <HeaderCloseButton />,
            headerShown: true,
            title: '',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.GRAY,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name={SCREENS.WEB_VIEW}
          component={WebViewModalScreen}
          options={{
            headerLeft: () => {},
            headerRight: () => <HeaderCloseButton />,
            headerShown: true,
            title: '',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.GRAY,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStack;
