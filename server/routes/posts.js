import express from 'express';

import {getPosts, createPost} from '../controllers/posts.js'; //Importing a specific function (getPosts)

const router = express.Router(); //Create a mini "server" (called router) to handle routes separately

router.get('/', getPosts);                                 //When someone visits the root URL http://localhost:5000/, send back "this worksss!!!"
router.post('/', createPost); 

export default router;