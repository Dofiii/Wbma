import {useState, useEffect} from 'react';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async (limit = 10) => {
    try {
      const response = await fetch(apiUrl + 'media?limit=' + limit);
      const json = await response.json();
      const media = await Promise.all(json.map(async (item) => {
        const response2 = await fetch(apiUrl + 'media/' + item.file_id);
        const json2 = await response2.json();
        return json2;
      }));
      setMediaArray(media);
    } catch (error) {
      console.error('load media error', error);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);
  return mediaArray;
};

export {useLoadMedia};
