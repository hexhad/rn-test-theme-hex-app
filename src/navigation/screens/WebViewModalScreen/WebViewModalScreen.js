import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native';
import React from 'react';

const WebViewModalScreen = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: route.params.url}} style={{flex: 1}} />
    </SafeAreaView>
  );
};

export default WebViewModalScreen;
