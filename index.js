const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupéry", 96, true);
addBookToLibrary("Murder on the Orient Express", "Agatha Christie", 274, false);

function displayBooks(bookList) {
  let bookContent = "";
  for (let index = 0; index < bookList.length; index++) {
    bookContent += `<div class="index-${index}" data-index-number="${index}">`;
    bookContent += "<ul>";
    bookContent += `<li class="title">${bookList[index].title}</li>`;
    bookContent += `<li class="author">${bookList[index].author}</li>`;
    bookContent += `<li class="pages">${bookList[index].pages}</li>`;
    bookContent += `<li class="read">${
      bookList[index].read ? "read" : "not read"
    }</li>`;
    bookContent += "</ul>";
    bookContent += `<button type="button" onclick="removeBook(${index})">Remove Book</button>`;
    bookContent += "</div>";
  }
  return (document.getElementById("book-list").innerHTML = bookContent);
}

function removeBook(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  displayBooks(myLibrary);
}

const addNewBook = document.getElementById("addNewBook");
const dialog = document.getElementById("dialogNewBook");
const cancel = document.getElementById("cancel");
const submitBook = document.getElementById("submitBook");

addNewBook.addEventListener("click", function () {
  dialog.show();
});

cancel.addEventListener("click", function () {
  dialog.close();
});

submitBook.addEventListener("click", function (event) {
  event.preventDefault();
  const newTitle = document.getElementById("bookTitle").value;
  const newAuthor = document.getElementById("bookAuthor").value;
  const newPages = document.getElementById("bookPages").value;
  const newRead = document.getElementById("bookRead").checked;
  addBookToLibrary(newTitle, newAuthor, newPages, newRead);
  displayBooks(myLibrary);
  dialog.close();
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookPages").value = "";
  document.getElementById("bookRead").checked = false;
});

displayBooks(myLibrary);
