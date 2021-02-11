import api from "../../service/api";
import { GET_CATEGORIES } from "../types";

export const getCategories = () => (dispatch: Function) => {
  api.get('/categories')
    .then( res => {
      dispatch({type: GET_CATEGORIES, payload: res.data});
    })
    .catch( err => {
      console.log(err);
    });
}
