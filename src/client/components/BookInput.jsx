import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const mapDispatchToProps = dispatch => {
  return {
    getUserInput: (input) => {
      dispatch(actions.getBooks(input));
    }
  }
}
const BookInput = (props) => {
  //Debounce method to make sure we don't fetch until user stops typing
  const debounceGetUserInput = AwesomeDebouncePromise(props.getUserInput, 600);
  return (
    <div style={{marginBottom: '20px'}}>
      <label style={{fontSize: '1em'}}>Name of Book: </label><input style={{fontSize: '1em'}}onKeyUp={(e) => debounceGetUserInput(e.target.value)} placeholder="Search for a book"/>
    </div>
  )
}
export default connect(null, mapDispatchToProps)(BookInput);