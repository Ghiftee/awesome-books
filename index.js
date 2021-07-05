let books = [new Book("Book1", "author1"), 
            new Book("Book2", "Author2"), 
            new Book("Book3", "Author3"), 
            new Book("Book4", "Author4")];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function populateBooks() {
  let bookList = document.querySelector('.book-list');

  books.forEach(book => {
    let bookContainer = document.createElement('div');
    let bookTitle = document.createElement('p');
    bookTitle.innerHTML = book.title;
    let bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = book.author;
    bookContainer.append(bookTitle, bookAuthor);
    bookList.append(bookContainer);
  });
  console.log(bookList);
}

window.addEventListener('load', populateBooks);