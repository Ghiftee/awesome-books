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
    const removeButton = document.createElement("button");
    removeButton.addEventListener('click', removeBook);
    removeButton.innerHTML = 'Remove'
    bookContainer.append(bookTitle, bookAuthor, removeButton);
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



function removeBook() {
    removeBook(title, author);

}
// window.addEventListener('load', populateBooks);
function removeBook(bookTitle, bookAuthor) {
    const newBooks =
        books.filter(function(book) {
            return (book.title !== bookTitle) && (book.author !== bookAuthor);
    });
    books = newBooks;
}