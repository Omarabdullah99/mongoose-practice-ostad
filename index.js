const express= require('express')
const mongoose = require('mongoose')
const cors= require('cors');
const studentRouter = require('./routers/studentRouter');


const app= express()

//middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

//router setup
app.use('/student', studentRouter)

// mongodb connection
const MONGODB_URL="mongodb+srv://khalidabdullah1147:qrO3Ak5lqTvsPiN8@practice-ostad.sh94t.mongodb.net/?retryWrites=true&w=majority&appName=practice-ostad"


main().catch(err => console.log(err))
async function main(){
    await mongoose.connect(MONGODB_URL);
    console.log('database connected')
  }

app.get('/', (req,res)=>{
    res.send('hello world')
    
})



app.listen(3000,()=>{
    console.log('port runing 3000')
})