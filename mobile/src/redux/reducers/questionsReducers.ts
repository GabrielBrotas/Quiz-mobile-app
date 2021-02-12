import { GET_QUESTIONS, RESET_GAME } from "../types";

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

    case RESET_GAME:
      return {...state, correctAnswers: 0, questions: []};

    default:
      return state
  }

}
