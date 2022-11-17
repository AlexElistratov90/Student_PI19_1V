//Register
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
      }}>Регистрация</Text>
      <Text style={{
        fontFamily: 'Regular',
        marginHorizontal: 55,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.4
      }}>Введите пожалуйста свои персональные данные для дальнейшей персонализации. Это необходимо только один раз.</Text>
      <View style={ gStyle.mainRegister }>
      <Icon color='#00716F' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10,
          color:'#00716F',
        }} placeholder="Email" secureTextEntry />
      </View>

      <View style={ gStyle.mainRegister }>
      <Icon color='#00716F' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10,
          color:'#00716F',
        }} placeholder="Пароль" secureTextEntry />
      </View>

      <View style={ gStyle.mainRegister }>
      <Icon color='#00716F' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10,
          color:'#00716F',
        }} placeholder="Пароль ещё раз" secureTextEntry />
      </View>

      <View >
        <TouchableOpacity>
          <View style={ gStyle.buttonRegister } >
            <Text style={ gStyle.buttonText }>Регистрация</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop:35,
        marginHorizontal:55,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigate('Login')}>
        <Text style={{
          fontWeight: 'bold',
          color: '#008000'
        }}>Уже есть регистрация</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }
}