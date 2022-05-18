import styled from 'styled-components';

const Container = styled.div`
  background-color: #EDEDED;
  width: 50%;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff;

  img { width: 8em; }

  @media (max-width: 768px) {
    p { font-size: auto; }    
  }
`;

export { Card, Container, }