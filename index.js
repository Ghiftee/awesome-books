let books = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function populateBooks() {
  let bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';

  if (localStorage.length > 0) {

    let booksLS = JSON.parse(localStorage.getItem('books'));

    books = [];

    booksLS.forEach(book => {

      books.push(book);

      let bookContainer = document.createElement('div');
      let bookTitle = document.createElement('p');
      bookTitle.innerHTML = book.title;
      let bookAuthor = document.createElement('p');
      bookAuthor.innerHTML = book.author;

      const removeButton = document.createElement("button");
      removeButton.classList.add('remove-btn');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', removeBook);

      let separator = document.createElement('hr');

      bookContainer.append(bookTitle, bookAuthor, removeButton, separator);
      bookList.append(bookContainer);

    });
  }  
}

function addBook(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    books.push(new Book(title, author));
    localStorage.setItem('books', JSON.stringify(books));
    populateBooks();
    e.preventDefault();
}

function removeBook(e) {
  
  let removeButtons = document.querySelectorAll('.remove-btn');
  let bookIndex = 0;

  removeButtons.forEach((removeButton, index) => {
    if (e.target === removeButton) {
      bookIndex = index;
    }
  });

  const newBooks = books.filter(function(book) {
      return (book.title !== books[bookIndex].title) && (book.author !== books[bookIndex].author);
  });
  books = newBooks;
  localStorage.setItem('books', JSON.stringify(books));
  populateBooks();
}

const addButton = document.getElementById("add-btn");
addButton.addEventListener('click', addBook);

window.addEventListener('load', populateBooks);
