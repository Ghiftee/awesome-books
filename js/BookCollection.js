/* eslint-disable no-unused-vars */
/* global Book, createHTML */

class BookCollection {
  constructor() {
    this.books = [];
    this.populate();
  }

  populate() {
    if (localStorage.length > 0) {
      this.books = createHTML(this.books);
    }
  }

  add(id, title, author) {
    this.books.push(new Book(id, title, author));
    this.refresh();
  }

  remove(bookIndex) {
    this.books.splice(bookIndex, 1);
    this.refresh();
  }

  refresh() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.populate();
  }
}