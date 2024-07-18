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

let bookContent = "";
for (let index = 0; index < myLibrary.length; index++) {
  bookContent += "<ul>";
  bookContent += `<li class="title">${myLibrary[index].title}</li>`;
  bookContent += `<li class="author">${myLibrary[index].author}</li>`;
  bookContent += `<li class="pages">${myLibrary[index].pages}</li>`;
  bookContent += `<li class="read">${
    myLibrary[index].read ? "read" : "not read"
  }</li>`;
  bookContent += "</ul>";
}

document.getElementById("book-list").innerHTML = bookContent;

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
  console.log(newTitle);
  console.log(newAuthor);
  console.log(newPages);
  console.log(newRead);
  dialog.close();
});
