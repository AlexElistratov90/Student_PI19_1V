import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { gStyle } from '../styles/style';

export default function Start({ navigation }) {
  const loadScene = () => {
    navigation.navigate('SecondScreen');
  }

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Первый Экран</Text>
      <Button title='Перейти на второй экран' onPress={loadScene}/>
    
    </View>
  );
}

const styles = StyleSheet.create({


});