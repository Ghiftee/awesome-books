/* eslint-disable no-use-before-define */

let books = [];

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
}

// Populate books section dynamically using local storage
// Called from page load, from adding a book, and from removing a book
function populateBooks() {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';

  if (localStorage.length > 0) {
    const booksLS = JSON.parse(localStorage.getItem('books'));

    books = [];

    booksLS.forEach((book) => {
      books.push(book);

      const bookContainer = document.createElement('div');
      const bookTitle = document.createElement('p');
      bookTitle.innerHTML = book.title;
      const bookAuthor = document.createElement('p');
      bookAuthor.innerHTML = book.author;
      const separator = document.createElement('hr');

      const removeButton = document.createElement('button');
      // removeButton.classList.add('remove-btn');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(book.id)
      });

      bookContainer.append(bookTitle, bookAuthor, removeButton, separator);
      bookList.append(bookContainer);
    });
  }
}

// Add book to collection, update local storage, and refresh displayed list
function addBook(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Math.random() * 100;
  books.push(new Book(title, author, id));
  localStorage.setItem('books', JSON.stringify(books));
  populateBooks();
  e.preventDefault();
}

// Remove book from collection, update local storage, and refresh displayed list
function removeBook(id) {
  // const removeButtons = document.querySelectorAll('.remove-btn');
  // let bookIndex = 0;

  // Identify which book to remove
  // removeButtons.forEach((removeButton, index) => {
  //   if (e.target === removeButton) {
  //     bookIndex = index;
  //   }
  // });
  
  const newBooks = books.filter(
    (b) => ((b.id !== id)),
  );
  books = newBooks;

  localStorage.setItem('books', JSON.stringify(books));
  populateBooks();
}

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', addBook);

window.addEventListener('load', populateBooks);
