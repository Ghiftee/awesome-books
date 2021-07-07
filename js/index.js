/* eslint-disable no-unused-vars */
/* global BookCollection, Book, createElement */

const bookCollection = new BookCollection();

function removeBook(e) {
  const removeButtons = document.querySelectorAll('.remove-btn');
  const bookIndex = Array.prototype.indexOf.call(removeButtons, e.target);
  bookCollection.remove(bookIndex);
}

function createHTML(books) {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';

  const booksLS = JSON.parse(localStorage.getItem('books'));

  books = [];

  booksLS.forEach((book, index) => {
    books.push(new Book(index + 1, book.title, book.author));

    const bookContainer = createElement('div', 'flex-row justify-between');
    const bookText = createElement('p', '', {}, `"${book.title}" by ${book.author}` )

    const removeButton = createElement('button', 'remove-btn', {}, 'Remove');
    removeButton.addEventListener('click', removeBook);

    bookContainer.append(bookText, removeButton);
    bookList.append(bookContainer);

  });

  return books;
}

function addBooks() {
  bookCollection.add(
    bookCollection.books.length + 1,
    document.getElementById('title').value,
    document.getElementById('author').value,
  );
}

function initialiseBooks() {
  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', addBooks);
}

document.addEventListener('DOMContentLoaded', initialiseBooks);
