import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { WebView } from 'react-native-webview'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <WebView 
      source={{url: 'https://www.google.com/'}}
      onLoad={console.log('Lodeed!!!')}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
