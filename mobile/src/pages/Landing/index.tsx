import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categoriesActions';
import { getQuestions } from '../../redux/actions/questionsActions';
import { StateProps } from '../../redux/store'

import {
  Container,
  Title,
  Text,
  ButtonsContainer,
} from './styles';

import Button from '../../components/Button';

const Landing: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { categories } = useSelector( (state: StateProps) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleStartQuiz = useCallback( (category: string) => {
    dispatch(getQuestions(category))
    navigation.navigate('Questions')
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
          onPress={() => handleStartQuiz(category)}
        >
          {category}
        </Button>
        ))}
      </ButtonsContainer>

    </Container>
  )
};

export default Landing;
