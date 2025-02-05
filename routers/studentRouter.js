const express= require('express')
const { createStudent } = require('../controllers/studentCnotroller')

const studentRouter= express.Router()

studentRouter.post('/createStudent', createStudent)

module.exports= studentRouter