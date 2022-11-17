//Ex 29
class Book {
  constructor(title, author, pages, timesUsed, discarded) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.timesUsed = timesUsed;
    this.discarded = discarded;
  }

  checkout(uses = 1) {
    this.timesUsed += uses;
  }
}

class Manual extends Book {
  constructor(title, author, pages, timesUsed, discarded) {
    super(title, author, pages, timesUsed, discarded);
  }

  checkYear(currentYear) {
    if (currentYear - this.copyright > 5) {
      this.discarded = "Yes";
    }
  }
}

class Novel extends Book {
  constructor(title, author, pages, timesUsed, discarded) {
    super(title, author, copyright, isbn, pages, timesUsed, discarded);
  }

  checkUses() {
    if (this.timesCheckedOut > 100) {
      this.discarded = "Yes";
    }
  }
}
