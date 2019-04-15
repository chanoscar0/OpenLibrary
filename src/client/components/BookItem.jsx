import React from 'react';

const BookItem = (props) => {
  const {title, author, publishYear} = props;
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  }
  return (
    <div style={itemStyle}>
      <div style={{width: '45%'}}><span style={{fontWeight: 'bold'}}>Title: </span>{title}</div>
      <div style={{width: '40%'}}><span style={{fontWeight: 'bold'}}>Author: </span>{author}</div>
      <div style={{width: '15%'}}><span style={{fontWeight: 'bold'}}>Published: </span>{publishYear}</div>
    </div>
  )
}
export default BookItem;