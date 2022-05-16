import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';

interface RemoveContainer {
  ifIsPhoneRemove?: boolean;
}

export function ListVideos({ ifIsPhoneRemove }: RemoveContainer) {
  const videos = useSelectorVideos();
    
  return (
  	<Container ifIsPhoneRemove={ifIsPhoneRemove}>
      {React.Children.toArray(
        videos?.map(({ _id, photo_id, description }) => {
          return (
            <Link to={`/video/${_id}`} style={{ textDecoration: 'none' }}>
              <Card>
                <img src={`http://localhost:4545/api/v1/files/${photo_id}`} alt="Foto"/>
                <p> {description} </p>
              </Card>
            </Link>
          )
        })
      )}
  	</Container>
  )
}