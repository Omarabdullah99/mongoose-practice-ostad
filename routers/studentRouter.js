const express= require('express')
const { createStudent, getStudent, updateStudent, getStudentById, deleteStudent} = require('../controllers/studentCnotroller')

const studentRouter= express.Router()

studentRouter.post('/createStudent', createStudent)
studentRouter.get('/getStudent', getStudent)
studentRouter.patch('/updateStudent/:id',updateStudent)
studentRouter.get("/getStudentById/:id",getStudentById)
studentRouter.delete('/deleteStudent/:id',deleteStudent)


module.exports= studentRouter