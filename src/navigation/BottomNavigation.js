import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import {SCREENS} from '@constants/screenConstants';
import {Bookmark, Coffee, Hexagon, Settings} from 'react-native-feather';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS} from '@constants/colorConstants';
import {useDispatch, useSelector} from 'react-redux';
import {toggleState} from '@rtk/slices/drawerSlice';
import CustomDrawer from '@components/CustomDrawer';
import BookmarksScreen from '@navigation/screens/BookmarksScreens';
import { navigationHeader } from '@styles/navigationStyles';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const dispatch = useDispatch();
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const drawerValue = useSelector(state => state.drawer.value);

  useEffect(() => {
    animateCustomDrawer();
  }, [drawerValue]);

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

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomDrawer onPress={() => dispatch(toggleState())} />
      <Animated.View
      pointerEvents={drawerValue ? 'auto':'none' }
        style={{
          flex: 1,
          borderRadius: drawerValue ? 0 : 5,
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle:navigationHeader.headerStyle
          }}>
          <Tab.Screen
            name={SCREENS.MAIN_SCREEN}
            component={MainScreen}
            options={{
              headerLeft: () => (<View style={{marginLeft: 10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Hexagon stroke={COLORS.BLACK} width={20} height={20} /><Text style={{fontSize:20,marginLeft:10}}>Whitelabled</Text></View>),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => dispatch(toggleState())}
                  style={{marginRight: 10}}>
                  <Settings stroke={COLORS.BLACK} width={20} height={20} />
                </TouchableOpacity>
              ),
              headerTitleAlign: 'center',
              headerShown: true,
              title: '',
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Coffee
                  stroke={focused ? '#000' : '#808080'}
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
                <TouchableOpacity
                  onPress={() => dispatch(toggleState())}
                  style={{marginRight: 10}}>
                  <Settings stroke={COLORS.BLACK} width={20} height={20} />
                </TouchableOpacity>
              ),
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Bookmark
                  stroke={focused ? '#000' : '#808080'}
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
