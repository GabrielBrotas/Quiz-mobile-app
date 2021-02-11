import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import thunk from 'redux-thunk';

import questionsReducers from './reducers/questionsReducers';

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
  ]
}

export interface StateProps {
  category: string;
  questions: QuestionDTO[];
};

const reducers = combineReducers({
  questions: questionsReducers,
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
