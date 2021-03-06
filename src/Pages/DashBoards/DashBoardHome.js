import React from 'react';
import { Grid, Typography } from '@mui/material';
import Booking from './Booking';

const DashBoardHome = () => {
    return (
        <Typography paragraph>
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Booking></Booking>
            </Grid>
        </Grid>
    </Typography>
    );
};

export default DashBoardHome;