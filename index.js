let books = [
  new Book('b1', 'a1'),
  new Book('b2', 'a2'),
  new Book('b3', 'a3'),
  new Book('b4', 'a4')
  ];

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
    removeButton.classList.add('remove-btn');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', removeBook);

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

function removeBook(e) {
  
  let removeButtons = document.querySelectorAll('.remove-btn');
  let bookIndex = 0;

  removeButtons.forEach((removeButton, index) => {
    if (e.target === removeButton) {
      bookIndex = index;
    }
  });

}

const addButton = document.getElementById("add-btn");
addButton.addEventListener('click', addBook);

window.addEventListener('load', populateBooks);
// function removeBook(bookTitle, bookAuthor) {
//     const newBooks =
//         books.filter(function(book) {
//             return (book.title !== bookTitle) && (book.author !== bookAuthor);
//     });
//     books = newBooks;
// }