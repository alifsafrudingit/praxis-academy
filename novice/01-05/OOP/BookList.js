class BookList {
  constructor() {
    this.bookRead;
    this.bookNotRead;
    this.refNextBook;
    this.refThisBook;
    this.refLastBook;
    this.allBook = [];
  }

  addBook() {
    if (this.allBook == null) {
      let insertBook = (book) => {
        return insertBook;
      };
    }
    console.log(insertBook);
  }

  finishCurrentBook() {
    if (this.bookRead == "read") {
      const date = Date.now();
    }
  }
}

class Book extends BookList {
  constructor(title, genre, author) {
    super();
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = Boolean;
    this.readDate = Date();
  }
}

let book = new Book("Coding", "Pemrograman", "Antony");
book.addBook();
console.log(book);
