import styled from 'styled-components';

interface RemoveContainer {
  ifIsPhoneRemove?: boolean;
}

const phoneRemoveAttributes = {
  computer: 'width: 50%; padding: 2px;',
  phone: 'display: none' 
};

const responsiveAttributes = {
  computer: 'padding: 0;',
  phone: 'width: 90%;'
} 


const Container = styled.div<RemoveContainer>`
  background-color: #EDEDED;
  ${props => props?.ifIsPhoneRemove ? phoneRemoveAttributes.computer : responsiveAttributes.computer}

  @media (max-width: 900px) {
    ${props => props?.ifIsPhoneRemove ? phoneRemoveAttributes.phone : responsiveAttributes.phone}
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

  @media (max-width: 768px) {
    p { 
      margin: 0; 
      font-size: 1em; 
    }    
  }
`;

export { Card, Container, }