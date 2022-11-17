//Login
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { gStyle } from '../styles/style';

export default class Login extends React.Component{
  render(){
    const{navigate} = this.props.navigation
    
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
      <View style={ gStyle.mainLogin }>
      <Icon name='mail' color='#FF0000' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10
        }} secureTextEntry />
      </View>

      <View style={ gStyle.mainLogin }>
      <Icon name='lock' color='#FF0000' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10
        }} secureTextEntry />
      </View>

      <View >
        <TouchableOpacity>
          <View style={ gStyle.buttonLogin } >
            <Text style={ gStyle.buttonText}>Войти</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop:35,
        marginHorizontal:55,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigate('Register')}>
        <Text style={{
          fontWeight: 'bold',
          color: '#008000'
        }}>Зарегистрироваться</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }
}