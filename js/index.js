/* eslint-disable no-use-before-define */
/* global Book, createElement */

class BookCollection {
  constructor() {
    this.books = [];
    this.populate();
  }

  // Populate books section dynamically using local storage
  // Called from page load, from adding a book, and from removing a book
  populate() {
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';

    if (localStorage.length > 0) {
      const booksLS = JSON.parse(localStorage.getItem('books'));

      this.books = [];

      booksLS.forEach((book, index) => {
        this.books.push(new Book(index + 1, book.title, book.author));

        const bookContainer = document.createElement('div');
        const bookTitle = createElement('p', '', {}, book.title);
        const bookAuthor = createElement('p', '', {}, book.author);
        const separator = document.createElement('hr');

        const removeButton = createElement('button', 'remove-btn', {}, 'Remove');
        removeButton.addEventListener('click', (e) => {
          bookCollection.remove(e);
        });
        bookContainer.append(bookTitle, bookAuthor, removeButton, separator);
        bookList.append(bookContainer);
      });
    }
  }

  // Add book to collection
  add() {
    this.books.push(new Book(
      this.books.length + 1,
      document.getElementById('title').value,
      document.getElementById('author').value,
    ));

    this.refresh();
  }

  // Remove book from collection
  remove(e) {
    const removeButtons = document.querySelectorAll('.remove-btn');
    const bookIndex = Array.prototype.indexOf.call(removeButtons, e.target);

    this.books.splice(bookIndex, 1);

    this.refresh();
  }

  // After adding/removing book from collection, update local storage, and refresh displayed list
  refresh() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.populate();
  }
}

const bookCollection = new BookCollection();

function initialiseBooks() {
  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', () => {
    bookCollection.add();
  });
}

document.addEventListener('DOMContentLoaded', initialiseBooks);
