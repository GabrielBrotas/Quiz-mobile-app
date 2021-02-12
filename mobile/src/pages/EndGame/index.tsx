import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { RESET_GAME } from '../../redux/types';

import {
  Container,
  InfoContainer,
  Title,
  Text,
  TextNumber
} from './styles';

import Button from '../../components/Button';

interface IEndGameProps {
  route: {
    params: {
      correctAnswers: number;
    }
  };
}

const EndGame: React.FC<IEndGameProps> = ({ route: { params: { correctAnswers } }}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
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
        <Text>de 15 questões.</Text>
      </InfoContainer>

      <Button onPress={handleGoBackToHome}>
        Voltar ao início
      </Button>
    </Container>
  )
};

export default EndGame;
