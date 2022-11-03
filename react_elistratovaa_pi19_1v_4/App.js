import React from 'react';
import { StyleSheet, Text, View, Image,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выставка лучших фотографий подводного мира!</Text>
      <Image style={styles.logo}resizeMode='contain' source={{uri:'https://sun1.userapi.com/sun1-16/s/v1/ig2/HDyHsnSZ5tdFURvKO7FEQUighLe-U7227is6Z-10PSXhDvIvfGXeZ-wMMNvSzMsS4cfb-HDh98RZIRAdvoH-dyLb.jpg?size=896x601&quality=96&type=album'}}/>
      <Button color='#38B8FF' title="Купить билет" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 500,
    height: 400,
  },
  text:{
    textAlign: 'center',
    color:'#38B8FF',
    fontWeight: "bold",
    fontSize: 40,
      },

});
