const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const student = await prisma.student.create({
      data: { firstName, lastName, age },
    });
    res.status(201).json(student);
  } catch (error) {
    console.error("Create Student Error:", error);
    res.status(500).json({ message: "Failed to create student" });
  }
};

// READ ALL
exports.getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students" });
  }
};

// READ ONE
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await prisma.student.findUnique({ where: { id } });
    if (!student) return res.status(404).json({ message: "Not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch student" });
  }
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const updated = await prisma.student.update({
      where: { id },
      data: { firstName, lastName, age },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update student" });
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.student.delete({ where: { id } });
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete student" });
  }
};
