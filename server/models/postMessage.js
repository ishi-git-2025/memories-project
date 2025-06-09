import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ //schema to define what kind of data a "Post" should have
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);
//create a model to be provided with the tools to interact with your database based on that schema.
export default PostMessage; 