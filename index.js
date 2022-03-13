const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routers/users');
const authRoute = require('./routers/auth');
const PORT = 8000;
dotenv.config();

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connect to MongoDB");
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

app.listen(PORT,()=> {
    console.log(`Backend server is running http://localhost:${PORT}`);
});