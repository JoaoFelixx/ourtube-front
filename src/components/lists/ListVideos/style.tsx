import styled from 'styled-components';

const Container = styled.div`
  margin: 5px;
  padding: 2px;
  background-color: #EDEDED;
  width: 50%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;

  img { width: 8em; }

  p { margin: 0 4px; color: #000; }
`;

export { Card, Container, }