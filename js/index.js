/* eslint-disable no-unused-vars */
/* global BookCollection, Book, createElement */

const sections = {
  'contact': 'Contact information',
  'add-new': 'Add new book',
  'list': 'All awesome books'
}

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

    const bookContainer = createElement(
      'div',
      `book-item flex-row justify-between align-center p-y-5 p-x-15 w-100 pos-rel${index % 2 === 0 ? ' bg-grey' : ''}`,
    );
    const bookText = createElement('p', '', {}, `"${book.title}" by ${book.author}`);

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

function setSectionHeading(headingText) {
  const sectionHeading = document.querySelector('h1');
  sectionHeading.innerHTML = headingText;
}


function showSection(sectionId) {
  document.getElementById(sectionId).classList.remove('hide');
  document.getElementById(`${sectionId}-menu`).classList.add('menu-focus');
  setSectionHeading(sections[sectionId]);
  Object.keys(sections).forEach(section => {
    if (section !== sectionId) {
      document.getElementById(section).classList.add('hide');
      document.getElementById(`${section}-menu`).classList.remove('menu-focus');
    }
  });
}

function initialiseEvents() {
  const addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', addBooks);

  Object.keys(sections).forEach(section => {
    const menuItem = document.getElementById(`${section}-menu`);
    menuItem.addEventListener('click', () => {
      showSection(section);
    });
  });

  const dateDisplay = document.querySelector('.date-display');
  const date = luxon.DateTime.now().toFormat("FF");
  const dateElement = createElement('p', '', {}, `${date}`);
  dateDisplay.append(dateElement);

  setSectionHeading(sections.list);
  document.getElementById('list-menu').classList.add('menu-focus');
}

document.addEventListener('DOMContentLoaded', initialiseEvents);