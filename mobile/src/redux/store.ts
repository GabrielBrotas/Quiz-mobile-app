import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import thunk from 'redux-thunk';

import questionsReducers from './reducers/questionsReducers';
import categoriesReducers from './reducers/categoriesReducers';

const middleware = [thunk];

const initialState = {};

interface QuestionDTO {
  _id: string;
  question: string;
  category: string;
  answers: [
    {
      _id: string;
      answer: string;
      isCorrectAnswer: boolean;
    }
  ];
  image: string;
};

export interface StateProps {
  categories: {
    categories: string[];
    category: string | null;
  };
  questions: {
    questions: QuestionDTO[];
    correctAnswers: number;
  };
};

const reducers = combineReducers({
  questions: questionsReducers,
  categories: categoriesReducers,
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
