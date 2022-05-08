import React from 'react';
import { Card, Container } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';

export function ListVideos() {
  const videos = useSelectorVideos();
    
  return (
  	<Container>
      {React.Children.toArray(
        videos?.map((video) => {
          return (
            <Card>
              <img src={`http://localhost:4545/api/v1/files/${video?.photo_id}`} alt="Foto"/>
              <p> Video muito divertido </p>
            </Card>
          )
        })
      )}
  	</Container>
  )
}