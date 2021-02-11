import React from 'react';

import {
  Container,
  InfoContainer,
  Title,
  Text,
  TextNumber
} from './styles';

import Button from '../../components/Button';

const EndGame: React.FC = () => {
  return (
    <Container>
      <Title>
        Parabens!!
      </Title>

      <InfoContainer>
        <Text>Você acertou</Text>
        <TextNumber>10</TextNumber>
        <Text>de 15 questões.</Text>
      </InfoContainer>


      <Button>
        Voltar ao início
      </Button>
    </Container>
  )
};

export default EndGame;
