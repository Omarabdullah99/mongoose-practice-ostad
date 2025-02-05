const mongoose= require('mongoose')

const studentSchema= mongoose.Schema({
    name:String,
    roll:Number,
    department:String,
    remarks:String
})

const studentModel= mongoose.model('students', studentSchema)

module.exports= studentModel