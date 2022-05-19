import styled from 'styled-components';

interface IsDisplayNone {
  isDisplayNone?: boolean;
}

const List = styled.div<IsDisplayNone>`
  background-color: #EDEDED;
  ${props => props.isDisplayNone && 'width: 50%;'}

  @media (max-width: 768px) {
    ${props => props.isDisplayNone && 'display: none;'}
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff;

  div {
    display: flex;
    align-items: center;
  }

  img { width: 6em; }

  @media (max-width: 768px) {
    p { font-size: 1em; }
    div { align-items: start; }
  }
`;

export { List, Item };