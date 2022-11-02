import React from 'react';
import { Text, View, Button, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{ fontSize: 40, fontWeight: 'bold' }}>
        Hello world!
      </Text>
      <Button title='Do not press' color="red"/>
      <Image 
      style={{
        width: 370
      }}
      source={require('./assets/orca.jpg')} />
    </View>
  );
}


export default MyApp