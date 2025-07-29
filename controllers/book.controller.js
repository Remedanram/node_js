const prisma = require("../prisma/client");

// CREATE a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, pageNo } = req.body;
    const book = await prisma.book.create({
      data: { title, author, pageNo },
    });
    res.status(201).json(book);
  } catch (error) {
    console.error("Create Book Error:", error);
    res.status(500).json({ message: "Failed to create book" });
  }
};

// READ all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (error) {
    console.error("Get All Books Error:", error);
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

// READ one book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id: req.params.id },
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    console.error("Get Book By ID Error:", error);
    res.status(500).json({ message: "Failed to fetch book" });
  }
};

// UPDATE a book by ID
exports.updateBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await prisma.book.update({
      where: { id: req.params.id },
      data: { title, author },
    });
    res.json(book);
  } catch (error) {
    console.error("Update Book Error:", error);
    res.status(404).json({ message: "Book not found or update failed" });
  }
};

// DELETE a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await prisma.book.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "Book deleted", book });
  } catch (error) {
    console.error("Delete Book Error:", error);
    res.status(404).json({ message: "Book not found or delete failed" });
  }
};
