import api from "../../service/api"
import { GET_QUESTIONS, SET_ANSWER } from "../types"

export const getQuestions = (category: string) => (dispatch: Function) => {
  api.get(`/questions/${category}`)
    .then( res => {
      dispatch({type: GET_QUESTIONS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
    });
}

export const increaseNumberOfCorrectAnswers = (correctAnswer: number) => (dispatch: Function) => {
  dispatch({type: SET_ANSWER, payload: correctAnswer});
}
