import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { increaseNumberOfCorrectAnswers, setNumberOfCorrectAnswers } from '../../redux/actions/questionsActions';
import { StateProps } from '../../redux/store';

import {
  Container,
  Image,
  Text,
  ButtonsContainer,
} from './styles';

import Button from '../../components/Button';

const Questions: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { questions } = useSelector( (state: StateProps) => state.questions);
  
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleAnswer = useCallback((isCorrectAnswer) => {
    if (isCorrectAnswer) {
      dispatch(increaseNumberOfCorrectAnswers(1));
    };
    setQuestionNumber(questionNumber + 1);

    if (questions.length === questionNumber + 1) {
      handleEndGame();
    }
  }, [questionNumber, questions]);

  const handleEndGame = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'EndGame'}],
    });
  }, [])

  if (questions.length === 0) {
    return <Text>Loading...</Text>
  }

  if (questionNumber === questions.length) {
    return <Text>Loading...</Text>
  }

  return (
    <Container style={{flex: 1, justifyContent: 'center'}}>
      <Image source={{
        uri: questions[questionNumber].image
      }} />

        <Text>{questions[questionNumber].question}</Text>

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
