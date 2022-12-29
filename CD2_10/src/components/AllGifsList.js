import * as React from 'react';
import { FlatList } from "react-native";
import { addMultipleGifs, deleteAllGifs } from "../services/GifManagement";
import GifItem from "./GifItem";

function AllGifsList() {
  React.useEffect(() => {
    (async () => {
      await addMultipleGifs(ids);
    })();

    return () => {
      deleteAllGifs();
    };
  }, []);

  const renderItem = (item) => {
    return <GifItem gifId={item.item.gifId} gifName={item.item.gifName} color={item.item.color} />;
  };

  const keyExtractor = (item, index) => {
    item.gifId.toString();
  };
  return (
    <FlatList
      style={{}}
      data={GIFListData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      
    />
  );
}

const GIFListData = [
  { id: 0, gifId: "ez6Ko3R6bHe5zM29WQ", gifName: "Happy new year!", color:'#dbd2ce' },
  { id: 1, gifId: "BPJmthQ3YRwD6QqcVD", gifName: "Celebrate", color:'#d1c1ba' },
  { id: 2, gifId: "ZA2iyhWnUchLbSwI0g", gifName: "New year", color:'#ede8e6' },
  { id: 3, gifId: "XxePWdpdifKZr1Uhix", gifName: "New year2", color:'#9e928d'  },
  { id: 4, gifId: "mbar54jwxlnKs5nlOc", gifName: "Fireworks", color:'#f7ede9' },
  { id: 5, gifId: "3oFzm06fG8g4FO0bMQ", gifName: "Champange", color:'#967162' },
  { id: 6, gifId: "ltcMWp8eMkuJWxS0K6", gifName: "Winter", color:'#ad7863' },
];

const ids = GIFListData.map((item) => item.gifId);

export default AllGifsList;