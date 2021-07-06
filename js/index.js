/* eslint-disable no-use-before-define */
/* global Book, createElement */

class BookCollection {
  constructor() {
    this.books = [];
    this.populate();
  }

  populate() {
    if (localStorage.length > 0) {
      createHTML(this.books);
    }
  }

  add(id, title, author) {
    this.books.push(new Book(id, title, author));
    
    this.refresh();
  }

  remove(e) {
    const removeButtons = document.querySelectorAll('.remove-btn');
    const bookIndex = Array.prototype.indexOf.call(removeButtons, e.target);

    this.books.splice(bookIndex, 1);

    this.refresh();
  }

  refresh() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.populate();
  }
}

const bookCollection = new BookCollection();

function createHTML(books) {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';

  const booksLS = JSON.parse(localStorage.getItem('books'));

  books = [];

  booksLS.forEach((book, index) => {
    books.push(new Book(index + 1, book.title, book.author));

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

function addBook() {
  bookCollection.add(
    bookCollection.books.length + 1,
    document.getElementById('title').value,
    document.getElementById('author').value);
}

function initialiseBooks() {
  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', addBook);
}

document.addEventListener('DOMContentLoaded', initialiseBooks);
