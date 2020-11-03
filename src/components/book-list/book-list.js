import React, { Component } from "react";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import { fetchBooks } from "../../action";
import { compose } from "../../utils";
import { withBookstoreService } from "../hoc";

import "./book-list.css";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.bookstoreService !== prevProps.bookstoreService) {
      this.update();
    }
  }

  componentDidMount() {
    this.update();
  }

  update() {
    this.props.fetchBooks();
  }

  render() {
    const { books } = this.props;
    console.log("books", books);
    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
