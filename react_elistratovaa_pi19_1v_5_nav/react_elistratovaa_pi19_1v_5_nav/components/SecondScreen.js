import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { gStyle } from '../styles/style';

export default function SecondScreen({ navigation }) {
  const goToPrev = () => {
    navigation.goBack();
  }
  const goToThird = () => {
    navigation.navigate('ThirdScreen');
  }
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Вторая страница</Text>
        <Button title='Назад' onPress={goToPrev}/>
        <Button title='Третий Экран' onPress={goToThird}/>
      </View>
    );
}

const styles = StyleSheet.create({

});