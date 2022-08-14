import React, { useEffect, useState } from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { BsFilterLeft } from 'react-icons/bs';
import { useParams, Link } from 'react-router-dom';
import { Channel as ChannelData, Video } from 'interfaces';
import { FlexContainer, SideNav, SearchBar } from 'components';
import {
  A,
  Card,
  Icon,
  Page,
  Image,
  Title,
  Margin,
  Filter,
  Content,
  Channel,
  Subscribe,
  IconChannel,
  NoHasContent,
} from './style';

export function GetVideoByDescription() {
  const { description } = useParams();
  const [hasContent, setHasContent] = useState<boolean>(true);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [filteredChannels, setFilteredChannels] = useState<ChannelData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (!description)
          return

        const [channels, videos] = await Promise.all([
          api.get<ChannelData[]>(`/search/channels/${description}`),
          api.get<Video[]>(`/search/videos/${description}`)
        ]);

        if (channels.status === 204 && videos.status === 204) {
          setHasContent(false);
          return
        }

        setFilteredVideos(videos.data);
        setFilteredChannels(channels.data);
      } catch (error) {
        toast.error('Error na busca, tente novamente');
      }
    })()
  }, [description])

  return (
    <Page>
      <SideNav />
      <FlexContainer>
        <SearchBar />
        <Margin>
          {hasContent ? (
            <React.Fragment>
              <Filter>
                <BsFilterLeft /> Filtros
              </Filter>
              {React.Children.toArray(
                filteredChannels.map(({ _id, icon_src, name, description }) => {
                  return (
                    <Link 
                      style={{ textDecoration: 'none', color: '#000' }} 
                      to={`/channel/${_id}`}>
                      <Channel>
                        <IconChannel src={icon_src} alt={name} />
                        <Content style={{ flexDirection: 'column', alignItems: 'start' }} >
                          <Title>{name}</Title>
                          <p>{description}</p>
                        </Content>
                        <Subscribe>INSCREVA-SE</Subscribe>
                      </Channel>
                    </Link>
                  )
                })
              )}
              {React.Children.toArray(
                filteredVideos.map(({ _id, description, preview_src, channel_id }) => {
                  return (
                    <A href={`/video/${_id}`}>
                      <Card>
                        <Image src={preview_src} alt={description} />
                        <div>
                          <Title>{description}</Title>
                          <Content>
                            <Icon src={channel_id.icon_src} alt='Channel Icon' />
                            <p>{channel_id.name}</p>
                          </Content>
                        </div>
                      </Card>
                    </A>
                  )
                })
              )}
            </React.Fragment>
          ) : <NoHasContent />}
        </Margin>
      </FlexContainer>
    </Page>
  )
}