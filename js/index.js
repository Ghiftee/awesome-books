/* eslint-disable no-unused-vars */
/* global BookCollection, Book, createElement */

const bookCollection = new BookCollection();

function removeBook(e) {
  console.log('here');
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

    const bookContainer = createElement(
      'div',
      'book-item flex-row justify-between align-center p-x-5 p-y-15 w-100 pos-rel' + (index % 2 === 0 ? ' bg-grey' : ''));
    const bookText = createElement('p', '', {}, `"${book.title}" by ${book.author}` )

    const divButton = createElement('div', 'pos-rel');
    const removeButton = createElement('button', 'remove-btn btn btn-shadow pos-rel', {}, 'Remove');
    removeButton.addEventListener('click', removeBook);

    divButton.append(removeButton);
    bookContainer.append(bookText, divButton);
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
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('title').focus();
}

function initialiseBooks() {
  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', addBooks);
}

document.addEventListener('DOMContentLoaded', initialiseBooks);
