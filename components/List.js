/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Listitem from './Listitem';

const url = 'http://media.mw.metropolia.fi/wbma/';


const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async (limit = 10) => {
    try {
      const response = await fetch(url + 'media?limit=' + limit);
      const json = await response.json();
      const media = await Promise.all(json.map(async (item) => {
        const response = await fetch(url + 'media/' + item.file_id);
        const json = await response.json();
        return json;
      }));

      setMediaArray(media);
    } catch (error) {
      console.error('load media error', error);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Listitem singleMedia={item} />}
    />
  );
};

export default List;
