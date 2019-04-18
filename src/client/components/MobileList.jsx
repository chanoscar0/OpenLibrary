import React, {Fragment} from 'react';

export const MobileList = ({books}) => {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    width: '100%',

  }
  const bookRender = books.map((book) => {
    return (
      <div style={divStyle}>
        <h2><strong>Title: </strong>{book.title}</h2>
        <h2><strong>Author: </strong>{book.author_name ? book.author_name[0] : null}</h2>
        <h2><strong>Published: </strong>{book.publish_year ? book.publish_year[0] : null}</h2>
      </div>
    )
  })
  return (
    <div>
      {bookRender}
    </div>
  )
}