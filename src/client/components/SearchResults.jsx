import React from 'react';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import {List} from 'react-virtualized';

const mapStateToProps = store => {
  return {
    bookList: store.bookReducer.bookList,
  }
}
const SearchResults = (props) => {
  const LIST_HEIGHT = 1000;
  const ROW_HEIGHT = 50;
  const ROW_WIDTH = 800;
  let {bookList} = props;
  if(bookList) {
    bookList = bookList.filter((book) => {
      if(book.title && book.author_name && book.first_publish_year) return book;
  });
}
  const renderRow = ({index,key,style}) => {
    return(
      <div key={key} style={style} className="row">
        <BookItem key={bookList[index].key} title={bookList[index].title ? bookList[index].title: null} author={bookList[index].author_name ? bookList[index].author_name[0]: null} publishYear ={bookList[index].first_publish_year ? bookList[index].first_publish_year : null}/>
    </div>
    )
  }
  return (
    <div className="list">
    {bookList.length === 0 ? <h1>No Books Found</h1> : <List
        width={ROW_WIDTH}
        height={LIST_HEIGHT}
        rowHeight={ROW_HEIGHT}
        rowRenderer={renderRow}
        rowCount={bookList.length}
        overscanRowCounter={3}
      /> }
      
    </div>
  )
}
export default connect(mapStateToProps, null)(SearchResults);
