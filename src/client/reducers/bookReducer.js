import * as types from '../constants/actionTypes';

const initialState = {
  bookList: [],
  userBook: ''
}

export default (previousState = initialState, action) => {
  switch(action.type) {
    case types.GET_BOOKS_SUCCESS: {
      const stateCopy = Object.assign({},previousState)
      let booksCopy = stateCopy.bookList.slice();
      booksCopy = action.payload.docs;
      stateCopy.bookList = booksCopy;
      return stateCopy;
    }
    case types.GET_BOOKS_FAILURE: {
      console.log(action.payload);
      return previousState;
    }
    default:
      return previousState;
  }
}