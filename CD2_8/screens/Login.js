//Авторизация
import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import Icon from '@expo/vector-icons/Foundation' 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function Login({ navigation }) {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
     
          padding: 40,
          paddingTop: 70,
          backgroundColor: '#8B008B'
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../assets/RegFormIcon.png')}
            style={{
              width: "100%",
              height: 200,
               borderRadius: 100 / 2,
               display:"block"
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Авторизация
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#FFFFFF',
            marginBottom: 50,
            marginTop:20,
          }}>
          Введите логин и пароль, которые создавали ранее при регистрации.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'#FF00FF'
          }}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#152647" />
           <TextInput placeholder="Email"  placeholderTextColor='#000000' style={{ paddingHorizontal: 10, color:'#000000' }}
           onChangeText={(inputLogin) => setLogin(inputLogin)} />
        </View>

        <View style={{
          flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'#FF00FF'
        }}>
          <AntDesign name="lock" size={24} color="#152647" />
          <TextInput
            placeholder="Пароль"
            placeholderTextColor='#000000'
            secureTextEntry
            style={{ paddingHorizontal: 10 }}
            onChangeText={(inputPassword) => setPassword(inputPassword)}
          />
        </View>

        <Button 
          title="Войти"
          color="black"
          onPress={() => {
              navigation.navigate("NewUser", {
                login: login,
                password: password,
                message: "Вы успешно авторизированы",
                
              });
            }}
        />
        <View style={{alignItems:'center', marginTop:20,}}>
        <Text style={{fontSize:16, fontWeight: 'bold', color:"#000000"}}>Еще нет профиля?</Text>
        <Text 
          style={{
           fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 15,
            color: '#FFFFFF'
          }}
          onPress={() =>
            navigation.navigate('Registration')
          }
        >
          Зарегистрироваться
        </Text>
        </View>
      </View>
    );
  
}