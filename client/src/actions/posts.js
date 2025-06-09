import * as api from '../api' //This line imports everything from the ../api file

//action creators - function that returns another function
//Function (getPosts) calls an API to get posts and then sends that data to Redux. Redux can then update your app's state with the posts it received

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data}); //LOGIC OF fetching post in the reducers folder
        } 
    catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type:'CREATE' , payload: data})
    } catch (error) {
        console.log(error)
    }
}