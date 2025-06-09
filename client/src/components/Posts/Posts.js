import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles.js';

const Posts = () =>{
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    return(
        // <> ... </> is a React Fragment — it lets you return multiple elements without wrapping them in an extra <div>.
        <>
        <h1>POSTS</h1>
        <Post />
        <Post />
        </>
    )
}

export default Posts;