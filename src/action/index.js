const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  bookstoreService.getBooks().then((data) => dispatch(booksLoaded(data)));
};

export { fetchBooks };
