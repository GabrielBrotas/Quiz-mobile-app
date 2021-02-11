import { GET_CATEGORIES } from "../types";

const initialState = {
  category: null,
  categories: []
};

interface ActionProps {
  type: string;
  payload: Object;
};

export default function categoriesReducers(state = initialState, action: ActionProps) {

  switch(action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.payload};

    default:
      return state
  }

}
