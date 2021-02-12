import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { StateProps } from '../../redux/store';

import {
  Container,
  Image,
  Text,
  ButtonsContainer,
} from './styles';

import Button from '../../components/Button';

import ElonMusk from '../../assets/elonmusk.jpg';

const Questions: React.FC = () => {
  const navigation = useNavigation();

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  const { questions } = useSelector( (state: StateProps) => state.questions);

  const handleAnswer = useCallback((isCorrectAnswer) => {
    if (isCorrectAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    };
    setQuestionNumber(questionNumber + 1);

    if (questions.length === questionNumber + 1) {
      navigation.reset({
        index: 0,
        routes: [{name: 'EndGame', params: {correctAnswers}}],
      });
    }
  }, [questionNumber, questions, correctAnswers]);

  if (questions.length === 0) {
    return <Text>Loading...</Text>
  }

  if (questionNumber === questions.length) {
    return <Text>Loading..</Text>
  }

  return (
    <Container style={{flex: 1, justifyContent: 'center'}}>
      <Image source={ElonMusk} />

        <Text>{questions[questionNumber].question
          ? questions[questionNumber].question
          : 'aa'
          }</Text>

        <ButtonsContainer>
          {questions[questionNumber].answers.map( answer => (
            <Button
              key={answer._id}
              primary={false}
              onPress={() => handleAnswer(answer.isCorrectAnswer)}
            >
              {answer.answer}
            </Button>
          ))}
          </ButtonsContainer>
    </Container>
  )
};

export default Questions;
