import { GET_QUESTIONS, GET_CATEGORIES, RESET_GAME } from "../types";

const initialState = {
  questions: [],
};

interface ActionProps {
  type: string;
  payload: Object;
};

export default function questionsReducers(state = initialState, action: ActionProps) {

  switch(action.type) {

    case GET_QUESTIONS:
      return {...state, questions: action.payload};

    case GET_CATEGORIES:
      return {...state, category: action.payload};

    case RESET_GAME:
      return {...state, category: null, questions: []};

    default:
      return state
  }

}
