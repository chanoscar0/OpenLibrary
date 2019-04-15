import React from 'react';
import BookInput from './client/components/BookInput';
import SearchResults from './client/components/SearchResults';
import 'react-virtualized/styles.css';

const App = () => {
  const divStyle = {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <div style={divStyle}>
      <h1>Book Lookup</h1>
      <BookInput />
      <SearchResults />
    </div>
  )
}

export default App;