import api from "../../service/api"
import { GET_QUESTIONS } from "../types"

export const getQuestions = () => (dispatch: Function) => {
  api.get('/questions')
    .then( res => {
      dispatch({type: GET_QUESTIONS, payload: res.data})
    })
    .catch( err => {
      console.log(err)
    })
}
