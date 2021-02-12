import api from "../../service/api"
import { GET_QUESTIONS, SET_ANSWER, SET_ANSWERS } from "../types"

export const getQuestions = (category: string) => (dispatch: Function) => {
  api.get(`/questions/${category}`)
    .then( res => {
      dispatch({type: GET_QUESTIONS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
    });
}

export const setNumberOfCorrectAnswers = (correctAnswers: number) => (dispatch: Function) => {
  dispatch({type: SET_ANSWERS, payload: correctAnswers});
}

export const increaseNumberOfCorrectAnswers = (correctAnswer: number) => (dispatch: Function) => {
  dispatch({type: SET_ANSWER, payload: correctAnswer});
}
