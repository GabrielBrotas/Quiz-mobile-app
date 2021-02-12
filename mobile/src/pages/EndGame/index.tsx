import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_GAME } from '../../redux/types';
import { StateProps } from '../../redux/store';

import {
  Container,
  InfoContainer,
  Title,
  Text,
  TextNumber
} from './styles';

import Button from '../../components/Button';

const EndGame: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { questions, correctAnswers } = useSelector( (state: StateProps) => state.questions);

  const handleGoBackToHome = useCallback(() => {
    dispatch({type: RESET_GAME});
    navigation.reset({
      index: 0,
      routes: [{name: 'Landing'}],
    });
  }, [])

  return (
    <Container>
      <Title>
        Parabens!!
      </Title>

      <InfoContainer>
        <Text>Você acertou</Text>
        <TextNumber>{correctAnswers}</TextNumber>
        <Text>de {questions.length} questões.</Text>
      </InfoContainer>

      <Button onPress={handleGoBackToHome}>
        Voltar ao início
      </Button>
    </Container>
  )
};

export default EndGame;
