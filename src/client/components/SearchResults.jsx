import React from 'react';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const mapStateToProps = store => {
  return {
    bookList: store.bookReducer.bookList,
  }
}
const SearchResults = (props) => {
  //Declaring constants for List component
  const LIST_HEIGHT = 600;
  const ROW_HEIGHT = 50;
  const ROW_WIDTH = 800;

  let {bookList} = props;
  //Only do operations on booklist if something is there
  if(bookList) {
    //Filter out books that have either no author, no publishYear, or no title
    bookList = bookList.filter((book) => {
      if(book.title && book.author_name && book.first_publish_year) return book;
  });
}
//Method needed with List to actually render the contents of a specific row
  const renderRow = ({index, parent, key, style}) => {
    return(
        <div key={key} style={style}>
          <BookItem key={bookList[index].key} title={bookList[index].title ? bookList[index].title: null} author={bookList[index].author_name ? bookList[index].author_name[0].slice(0, 30): null} publishYear ={bookList[index].first_publish_year ? bookList[index].first_publish_year : null}/>
      </div>
    )
  }
  return (
    <div>
    {/* When there's no books, render No Books Found */}
    {bookList.length === 0 ? <h1>No Books Found</h1> : 
    <List
        width={ROW_WIDTH}
        height={LIST_HEIGHT}
        rowHeight={ROW_HEIGHT}
        rowRenderer={renderRow}
        rowCount={bookList.length}
        overscanRowCounter={3}
        style={{border: '1px solid black'}}
        scrollToIndex={0}
      /> 
      }
    </div>
  )
}
export default connect(mapStateToProps, null)(SearchResults);
