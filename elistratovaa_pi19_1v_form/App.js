import { statusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
// import Constants from 'expo-constants';


export default class App extends React.Component {
  state = {
    isFontLoad: false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.ttf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.ttf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.ttf')
    });
    this.setState({isFontLoaded:true})
  }

render(){
  return (
    (this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
  );
}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
