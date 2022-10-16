import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import birdthumbnail from './images/birdthumbnail.jpg';
const App = () => {
    return(
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={birdthumbnail} alt="memories" height="1060" />
            </AppBar>
        </Container>
    )
}

export default App;