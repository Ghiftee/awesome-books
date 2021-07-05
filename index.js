let books = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function populateBooks() {
  let bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';

  books.forEach(book => {
    let bookContainer = document.createElement('div');
    let bookTitle = document.createElement('p');
    bookTitle.innerHTML = book.title;
    let bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = book.author;
    bookContainer.append(bookTitle, bookAuthor);
    bookList.append(bookContainer);
  });
}


function addBook(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    books.push(new Book(title, author));

    populateBooks();

    e.preventDefault();

}


const addButton = document.getElementById("add-btn");
addButton.addEventListener('click', addBook);


// window.addEventListener('load', populateBooks);
