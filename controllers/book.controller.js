const books = require("../model/book.model");

// CREATE
exports.createBook = (req, res) => {
  const book = {
    id: Date.now().toString(),
    title: req.body.title,
    author: req.body.author,
  };
  books.push(book);
  res.status(201).json(book);
};

// READ ALL
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// READ ONE
exports.getBookById = (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

// UPDATE
exports.updateBook = (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  res.json(book);
};

// DELETE
exports.deleteBook = (req, res) => {
  const index = books.findIndex((b) => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
};
