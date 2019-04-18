import * as types from '../constants/actionTypes';

const initialState = {
  bookList: [],
  userBook: '',
}

export default (previousState = initialState, action) => {
  switch(action.type) {
    case types.GET_BOOKS_SUCCESS: {
      //Make a copy of state
      const stateCopy = Object.assign({},previousState)
      let booksCopy = stateCopy.bookList.slice();
      //Change copy to match array grabbed from API
      booksCopy = action.payload.docs;
      //Assign copied array into copy of state
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