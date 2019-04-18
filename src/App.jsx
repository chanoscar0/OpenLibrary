import React from 'react';
import BookInput from './client/components/BookInput';
import SearchResults from './client/components/SearchResults';
import { WindowDimensionsProvider } from './client/components/WindowDimensionProvider';

const App = () => {
  const divStyle = {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <WindowDimensionsProvider>
      <div style={divStyle}>
        <h1 style={{fontSize: '2em'}}>Book Lookup</h1>
        <BookInput />
        <SearchResults />
      </div>
    </WindowDimensionsProvider>
  )
}

export default App;