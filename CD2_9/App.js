import * as React from 'react';
import { useEffect } from 'react';
import {ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert } from 'react-native';
import Constants from 'expo-constants';
import Items from "./Items";
import Header from "./Header";

import { Card } from 'react-native-paper';



export default function App() {
   const backAction = () => {
    Alert.alert("Внимание!", "Вы точно хотите выйти?", [
      {
        text: "Отмена",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Да", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const renderItem = (item) => {
    return (
      <Items
        iconName={item.item.iconName}
        name={item.item.name}
        description={item.item.description}
        color={item.item.color}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  return (
    <View>
      <Header />
      <FlatList
        style={styles.exercisesFlatListContainer}
        data={exercisesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  exercisesFlatListContainer: { width: "100%", height: "89%" },
});

const exercisesData = [
  {
    id: 0,
    iconName: "apple-alt",
    name: "Яблоко",
    description:
      "Фрукты",
    color:'#5c4531'
  },
  {
    id: 1,
    iconName: "lemon",
    name: "Лемон",
    description:
      "Фрукты",
    color:'#403d3b'
  },
  {
    id: 2,
    iconName: "paw",
    name: "Отпечаток лапы",
    description:
      "Чья же она?",
        color:'#d1c8c2'
  },
  {
    id: 3,
    iconName: "ribbon",
    name: "Ленточка",
    description:
      "Аксесуар",
        color:'#7d5745'
  },
  {
    id: 4,
    iconName: "robot",
    name: "Робот",
    description:
      "Шумный",
      color:'#b87d46'
  },
  {
    id: 5,
    iconName: "school",
    name: "Школа",
    description:
      "Образовательное учреждение",
      color:'#7d726d'
  },
  {
    id: 6,
    iconName: "shower",
    name: "Душ",
    description: "Бодрящий",
    color:'#806d65'
  },
];
