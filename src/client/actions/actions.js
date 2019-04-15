import * as types from '../constants/actionTypes';

export const getBooks = (title) => {
  return (dispatch) => {
    // joining in book title with +s to create query string (I.E. Lord Of the Rings === Lord+Of+the+Rings)
    const queryString = title.split(' ').join('+');
    // Request to the API for the books
    fetch('http://openlibrary.org/search.json?title=' + queryString)
    .then(res => res.json())
    .then(data => {
      //If successful, update redux store with grabbed data
      dispatch(getBooksSuccess(data));
    })
    .catch(err => {
      //If failed, log the error to the console
      dispatch(getBooksFailure(err));
    })
    //fetch from the api here and dispatch the success or fail case
  }
}
export const getBooksSuccess = (data) => ({
  type: types.GET_BOOKS_SUCCESS,
  payload: data
})
export const getBooksFailure = (err) => ({
  type: types.GET_BOOKS_FAIL,
  payload: err
})
