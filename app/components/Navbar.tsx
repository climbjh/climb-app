/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'teal',
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    selectedLink: {
        textDecoration: 'none',
        color: 'lightgrey',
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const params = useParams();

    const [selected, setSelected] = useState('');

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container direction="row">
                        <Grid item xs={2}>
                            <NavLink className={selected == 'Home' ? classes.selectedLink : classes.link} to="/" onClick={() => setSelected('Home')}>
                                <HomeIcon />
                            </NavLink>
                        </Grid>
                        <Grid item xs={true}>
                            <Grid container direction="row" spacing={10} justify="center">
                                <Grid item>
                                    <Typography variant="h6">
                                        <NavLink
                                            className={selected == 'Areas' ? classes.selectedLink : classes.link}
                                            to="/apex/climb_app/areas"
                                            onClick={() => setSelected('Areas')}
                                        >
                                            AREAS
                                        </NavLink>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        <NavLink
                                            className={selected == 'Routes' ? classes.selectedLink : classes.link}
                                            to="/apex/climb_app/routes"
                                            onClick={() => setSelected('Routes')}
                                        >
                                            ROUTES
                                        </NavLink>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        <NavLink
                                            className={selected == 'Climbers' ? classes.selectedLink : classes.link}
                                            to="/apex/climb_app/climbers"
                                            onClick={() => setSelected('Climbers')}
                                        >
                                            CLIMBERS
                                        </NavLink>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
