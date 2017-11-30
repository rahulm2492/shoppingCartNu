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

export const setDepartureCity = val =>{
return {
    type: 'DEPARTURE_CITY',
    val,
  }
}
export const setArrivalCity = val =>{
return {
    type: 'ARRIVAL_CITY',
    val
  }
}
export const setDepartureDate = val =>{
return {
    type: types.DEPARTURE_DATE,
    val,
  }
}
export const setRange = val =>{
return {
    type: types.RANGE,
    val,
  }
}

export const setFilterData = items => 
{
  return {
    type: types.FILTER,
    items,
  }
}
export const setReturnDate = val =>{
return {
    type: types.RETURN_DATE,
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





