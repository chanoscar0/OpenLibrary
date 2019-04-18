import React from 'react';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import { List} from 'react-virtualized';
import {useWindowDimensions} from './WindowDimensionProvider';
import {MobileList} from './MobileList';
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
  const { width } = useWindowDimensions();
  console.log(width);
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
      return (
        <div key={key} style={style}>
          <BookItem key={bookList[index].key} title={bookList[index].title ? bookList[index].title: null} author={bookList[index].author_name ? bookList[index].author_name[0].slice(0, 30): null} publishYear ={bookList[index].first_publish_year ? bookList[index].first_publish_year : null}/>
      </div>
      )
  }
  return (
    <div>
    {/* When there's no books, render No Books Found */}
    {width < 800 ? <MobileList books={bookList} /> : 
    <List
        width={ROW_WIDTH}
        height={LIST_HEIGHT}
        rowHeight={ROW_HEIGHT}
        rowRenderer={renderRow}
        rowCount={bookList.length}
        overscanRowCounter={3}
        style={{fontSize: '1em'}}
        scrollToIndex={0}
      /> 
  }
    </div>
  )
}
export default connect(mapStateToProps, null)(SearchResults);
