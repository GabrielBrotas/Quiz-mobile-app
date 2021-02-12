import { GET_QUESTIONS, RESET_GAME, SET_ANSWER, SET_ANSWERS } from "../types";

const initialState = {
  questions: [],
  correctAnswers: 0
};

interface ActionProps {
  type: string;
  payload: Object;
};

export default function questionsReducers(state = initialState, action: ActionProps) {

  switch(action.type) {

    case GET_QUESTIONS:
      return {...state, questions: action.payload};

    case SET_ANSWERS:
      return {...state, correctAnswers: action.payload}

    case SET_ANSWER:
      return {...state, correctAnswers: state.correctAnswers + (action.payload as number)}

    case RESET_GAME:
      return {...state, correctAnswers: 0, questions: []};

    default:
      return state
  }

}
