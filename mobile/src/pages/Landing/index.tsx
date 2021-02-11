import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Text,
  ButtonsContainer,
} from './styles';

import Button from '../../components/Button';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const handleStartQuiz = useCallback( () => {
    navigation.navigate('Questions');
  }, [])

  return (
    <Container>
      <Title>Octupus Quiz</Title>

      <Text>
        Bem vindo ao Octupus Quiz.
        O Game é composto por um total de 15 perguntas, se desafie em um dos conhecimentos abaixo.
      </Text>

      <Text>Escolha uma categoria:</Text>

      <ButtonsContainer>
        <Button
          onPress={handleStartQuiz}
        >
          Portugues
        </Button>

        <Button
          onPress={handleStartQuiz}
        >
          Portugues
        </Button>

        <Button
          onPress={handleStartQuiz}
        >
          Portugues
        </Button>

        <Button
          onPress={handleStartQuiz}
        >
          Portugues
        </Button>
      </ButtonsContainer>

    </Container>
  )
};

export default Landing;
