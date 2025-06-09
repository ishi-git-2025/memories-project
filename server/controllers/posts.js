import PostMessage from "../models/postMessage.js";

//executing functions for our ruotes in a separate file

export const getPosts = async (req,res) =>{ //async as find can take time
   try {
     const postMessages = await PostMessage.find();
     res.status(200).json(postMessages);  //returns all posts in JSON format
   } 
   catch (error) {
    res.status(404).json({ message : error.message})
   }
}

export const createPost = async (req,res) =>{
    const post = req.body;

    const newPost = new PostMessage(post); //creates a new instance of the PostMessage model 
    try {
        await newPost.save();
        res.status(201).json(newPost); //Saves the document to MongoDB and created post in JSON.
    } 
    catch (error) {
        res.status(409).json({ message : error.message}) 
    }
}
