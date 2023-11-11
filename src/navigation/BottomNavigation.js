import React, {useEffect, useRef} from 'react';
import {Animated, Keyboard, SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import {Bookmark, Coffee} from 'react-native-feather';
import {SCREENS} from '@constants/screenConstants';
import {COLORS} from '@constants/colorConstants';
import {useDispatch, useSelector} from 'react-redux';
import {toggleState} from '@rtk/slices/drawerSlice';
import CustomDrawer from '@components/CustomDrawer';
import BookmarksScreen from '@navigation/screens/BookmarksScreens';
import {navigationHeader} from '@styles/navigationStyles';
import Loader from '@components/Loader';
import {getValue} from '@rtk/selectors';
import HeaderLogo from '@components/Header/HeaderLogo';
import HeaderRightSettings from '@components/Header/HeaderRightSettings';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const dispatch = useDispatch();
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const drawerValue = useSelector(getValue);

  useEffect(() => {
    const animateCustomDrawer = () => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleValue, {
            toValue: drawerValue ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(offsetValue, {
            toValue: drawerValue ? 0 : -280,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    };
    !drawerValue && Keyboard.dismiss();
    animateCustomDrawer();
  }, [drawerValue]);

  const onPressSettingsButton = () => {
    dispatch(toggleState());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Loader visible={false} />
      <CustomDrawer onPress={() => dispatch(toggleState())} />
      <Animated.View
        pointerEvents={drawerValue ? 'auto' : 'none'}
        style={[
          styles.mainWrapper,
          {
            borderRadius: drawerValue ? 0 : 5,
            transform: [{scale: scaleValue}, {translateX: offsetValue}],
          },
        ]}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: navigationHeader.headerStyle,
          }}>
          <Tab.Screen
            name={SCREENS.MAIN_SCREEN}
            component={MainScreen}
            options={{
              headerLeft: () => <HeaderLogo />,
              headerRight: () => (
                <HeaderRightSettings
                  onPressHeaderRight={onPressSettingsButton}
                />
              ),
              headerTitleAlign: 'center',
              headerShown: true,
              title: '',
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Coffee
                  stroke={focused ? COLORS.BLACK_HIGH : COLORS.GRAY_LOW}
                  width={20}
                  height={20}
                />
              ),
            }}
          />
          <Tab.Screen
            name={SCREENS.BOOKMARK_SCREEN}
            component={BookmarksScreen}
            options={{
              headerTitleAlign: 'center',
              headerShown: true,
              title: '',
              headerRight: () => (
                <HeaderRightSettings
                  onPressHeaderRight={onPressSettingsButton}
                />
              ),
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Bookmark
                  stroke={focused ? COLORS.BLACK_HIGH : COLORS.GRAY_LOW}
                  width={20}
                  height={20}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </Animated.View>
    </SafeAreaView>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  marginRightAdjust: {marginRight: 10},
});
