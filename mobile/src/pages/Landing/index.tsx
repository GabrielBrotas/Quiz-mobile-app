import React from 'react';

import {
  Container,
  Title,
  Text,
  Button,
  ButtonText,
  ButtonsContainer,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Title>Octupus Quiz</Title>

      <Text>
        Bem vindo ao Octupus Quiz.
        O Game é composto por um total de 15 perguntas, se desafie em um dos conhecimentos abaixo.
      </Text>

      <Text>Escolha uma categoria:</Text>

      <ButtonsContainer>
        <Button>
          <ButtonText>Portugues</ButtonText>
        </Button>

        <Button>
          <ButtonText>Portugues</ButtonText>
        </Button>

        <Button>
          <ButtonText>Portugues</ButtonText>
        </Button>

        <Button>
          <ButtonText>Portugues</ButtonText>
        </Button>
      </ButtonsContainer>
      
    </Container>
  )
};

export default Landing;
