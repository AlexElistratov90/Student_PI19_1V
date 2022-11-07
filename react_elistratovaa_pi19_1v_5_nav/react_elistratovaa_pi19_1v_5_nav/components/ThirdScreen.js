import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { gStyle } from '../styles/style';

export default function ThirdScreen({ navigation }) {
  const goToPrev = () => {
    navigation.goBack();
  }
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Третья страница</Text>
        <Button title='Назад' onPress={goToPrev}/>
      </View>
    );
}

const styles = StyleSheet.create({

});