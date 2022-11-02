import * as React from 'react';
import { Text, View, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>
          Курс на яркую жизнь! Путешествия
        </Text>
      </View>

      <View style={{ flex: 3, backgroundColor: '#D3D3D3', paddingBottom: 50 }}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 25 }}>
          «На острове Сардиния готовы платить за переезд»
        </Text>
      </View>

      <View style={{ flex: 15, backgroundColor: '#A9A9A9' }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            marginTop: 25,
            paddingHorizontal: 10,
          }}>
          Помним, что вы любите рубрику об уголках нашей планеты, которые ищут новых жителей и даже готовы платить деньги за переезд. Сегодня герой статьи – итальянский остров Сардиния. Да, даже такое популярное туристическое место может страдать от депопуляции. Правительство Сардинии относится к этому серьезно и по этой причине выделило 45 миллионов евро, сумму, достаточную для финансирования 3000 грантов на переезд. Желающему переехать жить на остров обещают единоразово выплатить 15 000 евро. Об этом совсем недавно сообщил президент Сардинии Кристиан Солинас.
        </Text>
      </View>
      <Button
        title="Читать далее"
        color="#F97BFB"
      />
    </View>
  );
}
