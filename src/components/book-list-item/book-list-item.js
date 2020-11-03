import React from 'react';
import './book-list-item.css';
const BookListItem = ({ book }) => {
  const {  title, author, coverImage, genre } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-genre">{genre}</div>
      </div>

    </div>
  );
};

export default BookListItem;