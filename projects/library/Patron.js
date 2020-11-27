class Patron {
   constructor(name, email, currentBook) {
      this.name = name;
      this.email = email;
      this.currentBook = null;
   }

   checkOut(book) {
      this.currentBook = book;
      book.out = true;
      book.patron = this;
      //date +14 days
      const newDueDate = new Date();
      newDueDate.setDate(newDueDate.getDate() + 14);
      book.dueDate = newDueDate;
   }

   returnBook(book) {
      this.currentBook = null;
      book.out = false;
      book.patron = null;
      book.dueDate = null;

   }

}