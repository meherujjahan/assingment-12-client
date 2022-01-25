import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import baby from '../../../images/baby.jpg'

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item style={{ ...verticalCenter, textAlign: 'center' }} xs={12} md={6} sm={6}>
                <Box>
                    <Typography variant="h3">
                        Loking for a <br />
                        Baby Lotion?
                    </Typography>
                    <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                    Every child deserves the best possible start in life, and all parents should have the ability to build both a family and career. Yet, too many families across Canada lack access to affordable, inclusive, and high-quality child care.
                    </Typography>
                    <Button variant="contained" style={{ backgroundColor: '#b0de45', color: '#4792de' }}>Purchase</Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={6} style={verticalCenter} >
                <img style={{ width: '100%' }} src={baby} alt="" />
            </Grid>


        </Grid>
    </Container>
    );
};

export default Banner;