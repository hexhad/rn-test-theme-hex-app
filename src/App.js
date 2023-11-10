import ScreenOne from '@navigation/screens/MainScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {persistor, store} from '@rtk/store';
import {buildProvidersTree} from '@services/globalProvider';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from '@navigation/MainStack';
import { navigationRef } from '@services/RootNavigation';
import { StatusBar } from 'react-native';
import { COLORS } from '@constants/colorConstants';


const App = () => {
  const ProviderTree = buildProvidersTree([
    [PersistGate, {persistor, loading: null}],
    [Provider, {store}],
    [NavigationContainer,{ref: navigationRef}],
  ]);

  return (
    <ProviderTree>
      <StatusBar
        animated={true}
        barStyle = "dark-content"   
        backgroundColor={COLORS.GRAY}
      />
      <MainStack/>
    </ProviderTree>
  );
};

export default App;
