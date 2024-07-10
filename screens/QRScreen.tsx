import React, {useState, useEffect} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import axios from 'axios';

const QRScreen = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: 'islamic education',
          type: 'video',
          key: 'YOUR_YOUTUBE_API_KEY',
        },
    })
      .then(response => setVideos(response.data.items))
      .catch(error => console.error(error));
  }, []);


  // @ts-ignore
  const renderItem = ({item}) => (
    <ListItem
      title={item.snippet.title}
      description={item.snippet.channelTitle}
    />
  );

  return (
    <Layout style={{flex: 1}}>
      <List
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id.videoId}
      />
    </Layout>
  );
};

export default QRScreen;
