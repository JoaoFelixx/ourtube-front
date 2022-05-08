import styled from 'styled-components';

const Container = styled.div`
  grid-area: listVideos;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 8em;
  }
`;

export { Card, Container, }