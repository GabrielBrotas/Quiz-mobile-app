import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';

import {
  Container,
  Title,
  Text,
  ButtonsContainer,
} from './styles';

import Button from '../../components/Button';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    api.get('/categories').then( response => {
      setCategories(response.data);
    }).catch( err => {
      console.log(err);
    });
  }, []);

  const handleStartQuiz = useCallback( () => {
    navigation.navigate('Questions');
  }, []);

  return (
    <Container>
      <Title>Octupus Quiz</Title>

      <Text>
        Bem vindo ao Octupus Quiz.
        O Game é composto por um total de 15 perguntas, se desafie em um dos conhecimentos abaixo.
      </Text>

      <Text>Escolha uma categoria:</Text>

      <ButtonsContainer>
        {categories.map( category => (
        <Button
          key={category}
          onPress={handleStartQuiz}
        >
          {category}
        </Button>
        ))}
      </ButtonsContainer>

    </Container>
  )
};

export default Landing;
