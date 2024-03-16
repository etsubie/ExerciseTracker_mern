import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from './routes/users.js';
import exerciseRouter from './routes/exercises.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const URL = process.env.CONNECTION_URL;
const connection = mongoose.connection;

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});
// useNewUrlParser and UseUnifiedTopology is deprecated
//mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(URL);
connection.once('open', () =>{
    console.log('MongoDB database connection established successfuly')
});