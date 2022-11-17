//Login
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { gStyle } from '../styles/style';

export default class Login extends React.Component{
  render(){
    return(
      <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Image source = {require('../images/RegFormIcon.png')}
        style={{width: '100%', height: '40%'}}
      />
      <Text style={{
        fontSize:30,
        fontFamily: 'SemiBold',
        alignSelf: 'center',
      }}>Авторизация</Text>
      <Text style={{
        fontFamily: 'Regular',
        marginHorizontal: 55,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.4
      }}>Введите логин и пароль, который создавали ранее при регистрации.</Text>
      <View style={ gStyle.main }>
      <Icon name='mail' color='#FF0000' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10
        }} placeholder="Email" secureTextEntry />
      </View>

      <View style={ gStyle.main }>
      <Icon name='lock' color='#FF0000' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10
        }} placeholder="Password" secureTextEntry />
      </View>

      <View >
        <TouchableOpacity>
          <View style={ gStyle.button } >
            <Text>Войти</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop:55,
        marginHorizontal:55,
        alignItems: 'center',
      }}>
      <Text>Уже есть регистрация</Text>
      </View>
      </View>
    )
  }
}