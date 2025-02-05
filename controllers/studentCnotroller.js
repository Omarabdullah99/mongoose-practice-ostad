const studentModel = require("../models/studentModel");

const createStudent = async (req, res) => {
  const { roll, name, department, remarks } = req.body;
  try {
    const existingStudent = await studentModel.findOne({ roll });

    if (existingStudent) {
      return res.status(400).json({ message: "Student roll already exists" });
    }

    const result = await studentModel.create({
      roll,
      name,
      department,
      remarks,
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

module.exports = { createStudent };
