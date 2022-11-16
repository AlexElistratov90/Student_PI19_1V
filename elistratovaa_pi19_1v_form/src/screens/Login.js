//Login
import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
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
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth:2,
        marginTop:50,
        paddingHorizontal:10,
        borderColor:'#00716F',
        borderRadius:23,
        paddingVertical:2,
      }}>
      <Icon name='mail' color='#00716F' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10
        }} placeholder="Email" secureTextEntry />
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth:2,
        marginTop:25,
        paddingHorizontal:10,
        borderColor:'#00716F',
        borderRadius:23,
        paddingVertical:2,
      }}>
      <Icon name='lock' color='#00716F' size={24} />
      <TextInput
        style={{
          paddingHorizontal:10
        }} placeholder="Password" secureTextEntry />
      </View>

      <View style={{
        marginHorizontal:55,
        alignItems: 'center',
      }}>
      <Text>Уже есть регистрация</Text>
      </View>
      </View>
    )
  }
}