import React, { useEffect, useState } from 'react';
import { api } from 'service';
import { Video } from 'interfaces';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Page, Margin } from '../style';
import { Ad, FlexContainer, SideNav, SearchBar } from 'components';
import { Link, Card, Icon, Image, Title, Content } from './style';

export function GetVideoByDescription() {
  const { description } = useParams();
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (!description)
          return

        const { status, data } = await api.get<Video[]>(`/search/${description}`);

        if (status === 204) {
          toast.warning('Nenhuma busca efetuada com sucesso');
          return
        }

        setFilteredVideos(data);

      } catch (error) {
        toast.error('Error na busca, tente novamente');
      }
    })()
  }, [description])

  return (
    <Page>
      <SideNav />
      <FlexContainer>
        <Margin>
          <SearchBar />
          <Ad />
          {React.Children.toArray(
            filteredVideos.map(({ _id, description, preview_src, channel_id }) => {
              return (
                <Link href={`/video/${_id}`}>
                  <Card>
                    <Image src={preview_src} alt={description} />
                    <div>
                      <Title>{description}</Title>
                      <br /><br />
                      <Content>
                        <Icon src={channel_id.icon_src} alt='Channel Icon' />
                        <p>{channel_id.name}</p>
                      </Content>
                    </div>
                  </Card>
                </Link>
              )
            })
          )}
        </Margin>
      </FlexContainer>
    </Page>
  )
}