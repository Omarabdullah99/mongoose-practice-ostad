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

const getStudent= async(req,res)=>{
  try {
    const allStudent= await studentModel.find()
    res.status(200).json(allStudent)
    
  } catch (error) {
    res.status(400).json(error)
    console.log(error)
    
  }
}

const getStudentById= async(req,res)=>{
  const id= req.params.id
  try {
    const result= await studentModel.findById(id)
    if(!result){
     return res.status(400).json({message:"student not fount"})
    }
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
    
  }
}

const updateStudent = async (req, res) => {
  let id = req.params.id;
  const updateData = req.body;

  try {
    const update = await studentModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!update) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated successfully", data: update });
  } catch (error) {
    res.status(400).json({ message: "Update failed", error: error });
  }
};

const deleteStudent=async(req,res)=>{
  const id= req.params.id
  try {
    const result = await studentModel.findByIdAndDelete(id)

    if(!result){
      return res.status(404).json({message:"stuent not fount"})
    }

    res.status(200).json({message:"Delete Successfully"})
  } catch (error) {
    res.status(400).json(error)
  }
}






module.exports = { createStudent, getStudent,updateStudent,getStudentById,deleteStudent };
