import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from './style';
import { useSelectorVideos } from 'Context/VideosProvider';
import { ID } from 'interfaces';

export function ListVideos({ id }: ID) {
  const videos = useSelectorVideos();
  
  useEffect(() => {
    console.log(id)
  }, [id]);

  return (
  	<Container>
      {React.Children.toArray(
        videos?.map(({ _id, photo_id, description }) => {
          return (
            <Card>
              <Link to={`/video/${_id}`} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={`http://localhost:4545/api/v1/files/${photo_id}`} alt="Foto"/>
                  <p> {description} </p>
                </div>
              </Link>
            </Card>
          )
        })
      )}
  	</Container>
  )
}