import React from 'react';

export function BookItem(props) {
  var book = props.book;
  return (
    <div style={{ border: '1px solid #ccc', padding: 8, marginBottom: 4 }}>
      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>
      <p>Published: {book.year}</p>
    </div>
  );
}

export function BookDetails(props) {
  var books = props.books;
  var show = props.show;

  if (show === false) {
   return(
    <div>
        <h2 style={{color:"darkblue"}}>Book Details</h2>
        <p>Books are hidden</p>
    </div>
   )
  }

  if (books.length === 0) {
    return (
      <div>
        <h2 style={{color:"darkblue"}}>Book Details</h2>
        <p>No books available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{color:"darkblue"}}>Book Details</h2>
      {books.map(function(b) {
        return <BookItem key={b.id} book={b} />;
      })}
    </div>
  );
}
