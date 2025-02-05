const express= require('express')
const mongoose = require('mongoose')

const app= express()



// mongodb connection
const MONGODB_URL="mongodb+srv://khalidabdullah1147:qrO3Ak5lqTvsPiN8@practice-ostad.sh94t.mongodb.net/?retryWrites=true&w=majority&appName=practice-ostad"
const port = 5000;

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