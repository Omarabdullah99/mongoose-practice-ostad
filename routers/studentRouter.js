const express= require('express')
const { createStudent, getStudent} = require('../controllers/studentCnotroller')

const studentRouter= express.Router()

studentRouter.post('/createStudent', createStudent)
studentRouter.get('/getStudent', getStudent)


module.exports= studentRouter