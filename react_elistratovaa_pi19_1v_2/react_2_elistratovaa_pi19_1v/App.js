import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Журнал Bright
      </Text>
      <Card style={styles.card}>
        <Text style={styles.blueText}>
          Новости
        </Text>
        <Image 
            source={require('./assets/Traveling.jpg')} 
            style={styles.img} 
          />
        <Text style={styles.newsHeading}>
          В поисках уединения
        </Text>
        <Text style={styles.plainText}>
          Когда мы произносим словосочетание «маленький обитаемый остров», многие из нас представляют картинку острова с пальмами, белоснежным песком и роскошным отелем. Но самый маленький обитаемый остров в мире под названием Just Room Enough Island имеет совсем другое очарование..
        </Text>
        <Button 
        title='Читать далее'
        style={styles.button}/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '2FDDF5',
    padding: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  card: {
    padding: 40,
  },
  blueText: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 40,
  },
  newsHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 45,
    marginBottom: 10,
  },
  img: {
    width: 300,
    height: 250,
    marginBottom: 30,
    marginLeft: 10,
  },
  button: {
    backgroundColor:'2FDDF5',
  },
  plainText: {
    fontSize: 16,
    marginBottom: 30
    
  },
});