/* eslint-disable no-use-before-define */

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = [];

    this.populate();

    // const addButton = document.getElementById('add-btn');
    // addButton.addEventListener('click', this.add());
    // let books = [];
    // this.books = [];
    // this.populateBooks;
    // this.refreshBooks;
    // this.addBook
  }

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
        // removeButton.addEventListener('click', removeBook);

        bookContainer.append(bookTitle, bookAuthor, removeButton, separator);
        bookList.append(bookContainer);
      });
    }
  }

  add() {
    this.books.push(new Book(
      this.books.length + 1,
      document.getElementById('title').value,
      document.getElementById('author').value));
    
    this.refresh();
  }

  remove() {

  }

  refresh() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.populate();
  }
}

// Create HTML element of given type and add classes, attributes and textContent (where applicable)
function createElement(elementType, classNames = '', attributes = {}, innerHTML = '') {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
}

function initialiseBooks() {
  const bookCollection = new BookCollection();
  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', function() {
    bookCollection.add();
  });
}

// Populate books section dynamically using local storage
// Called from page load, from adding a book, and from removing a book
function populateBooks() {
}

//After adding/removing book from collection, update local storage, and refresh displayed list
function refreshBooks() {
  
}

// Add book to collection
function addBook() {

}

// Remove book from collection
function removeBook(e) {

  //Identify which book to remove
  const removeButtons = document.querySelectorAll('.remove-btn');
  const bookIndex = Array.prototype.indexOf.call(removeButtons, e.target);
  
  // const newBooks = books.filter(
  //   (b) => ((b.id !== id)),
  // );
  // books = newBooks;

  books.splice(bookIndex, 1);
  refreshBooks();
}

document.addEventListener('DOMContentLoaded', initialiseBooks);
