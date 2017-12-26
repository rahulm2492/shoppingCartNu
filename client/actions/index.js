import 'whatwg-fetch';
import * as types from '../constants/ActionTypes'

export const loadingError = e => {
  return {
    type: types.LOADING_ERROR,
    data: e,
  }
}

export const dataLoading = val => {
  return {
    type: types.LOADING_DATA,
    status: val,
  }
}
export const dataLoaded = val => {
  return {
    type: types.LOADED_DATA,
    val,
  }
}


export const customerDetail = val => {
  return {
    type: types.CUSTOMERDETAIL,
    val
  }
}
export const addtoCart = val =>{
return {
    type: types.ADDTOCART,
    val,
  }
}
export const submitClicked = val =>{
return {
    type: types.SUBMIT,
    val,
  }
}





