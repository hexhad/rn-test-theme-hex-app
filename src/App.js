import ScreenOne from '@navigation/screens/MainScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {persistor, store} from '@rtk/store';
import {navigationRef} from '@services/globalNavigation';
import {buildProvidersTree} from '@services/globalProvider';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from '@navigation/MainStack';

const App = () => {
  const ProviderTree = buildProvidersTree([
    [PersistGate, {persistor, loading: null}],
    [Provider, {store}],
    [NavigationContainer, {ref: navigationRef}],
  ]);

  return (
    <ProviderTree>
      <MainStack/>
    </ProviderTree>
  );
};

export default App;
