import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

import memories from './images/memories.png';
import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> { //React hook that lets you run side effects in your component. Think of side effects as anything that’s outside the normal rendering flow
        dispatch(getPosts());
    }, [dispatch]) ; 
    //dispatch is added to the dependency array, so the effect would re-run only if dispatch changes

    return(
        <Container maxWidth= "lg">
            <AppBar className={classes.appBar} position='static' color='inherit'> {/*top bar and heading*/}
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height="60"/>
            </AppBar> 
            {/* <Grow in> for animation */}
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}> {/* Lays out items in a grid with space between them and stretched vertically. */}
                        <Grid item xs={12} sm ={7}>
                       
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm ={4}>
                      
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            {/* </Grow> */}
        </Container>
        
    );
}

export default App;

