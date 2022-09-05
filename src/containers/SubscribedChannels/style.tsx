import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  display: flex;
`;

const Margin = styled.div`
  padding:  10px 2em;

  div {
    padding: 5px 0;
  }

  @media (max-width: 768px) {
    padding: 5px 4px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #000;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const Icon = styled.img`
  height: 10em;
  border-radius: 50%;
`;

export { Card, Icon, Page, Margin };