import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { WebView } from 'react-native-webview'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection:'column'}}>
      <Text>Show webview</Text>
      <WebView style={{flex: 1}}
      originWhitelist={['*']}
      source={PolicyHTML}
      style={{ marginTop: 20 }}
      javaScriptEnabled={true}
      domStorageEnabled={true} />
    </View>
  );
}
const PolicyHTML = require('./html/kakao_login.html');
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:  '#ff00ff'
  },webView :{
    height: 320,
    width : 200
  }
});
