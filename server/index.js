import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express(); // create an Express app

app.use(cors()); //Allow frontend and backend to talk to each other, so server will accept requests from other websites
app.use('/posts', postRoutes); //use the postRoutes whenever someone visits a URL localhost:5000/posts, adding prefix for all the routes in postRoutes

app.use(bodyParser.json({ limit: '30mb', extended: true })) //Hey Express, use this as a middleware and Accept JSON data upto 30mb and allow nested data inside json
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })) //allow incoming form submissions (like HTML form submission) and allow more complex data in form

const PORT = process.env.PORT || 5000 //Use the server's port if available, otherwise use 5000 locally

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.gexrdro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true }) // connecting to db
.then(() => app.listen(PORT ,console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))
