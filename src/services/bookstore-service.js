export default class BookstoreService {
  
  async getResource() {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyAbBqBp-u3u9adeeb4ia7ZQ57KPcIaxP9M`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch` + `, received ${res.status}`);
    }
    return await res.json();
  }
  async getBooks() {
    return this.getResource().then((res) =>
      res.items.map((book) => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors[0],
          coverImage: book.volumeInfo.imageLinks.smallThumbnail,
          genre: book.volumeInfo.categories,
        };
      })
    );
  }
}
