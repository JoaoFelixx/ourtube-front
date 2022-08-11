import styled from 'styled-components';

const List = styled.div`
  background-color: #EDEDED;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #FFF;

  @media (max-width: 768px) {
    p { font-size: 1em; }  
  }
`;

const Preview = styled.img`
  width: 10em; 
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: start; 
  }
`;

const Content = styled.div`
  margin-left: 1em;
`;


export { List, Item, Flex, Content, Preview };