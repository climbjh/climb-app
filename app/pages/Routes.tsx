/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Route } from '@src/generated';
import { Link } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';

import PaginatedTable from './../components/PaginatedTable';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
    },
}));

export default function Routes() {
    const [routes, setRoutes] = useState([]);

    const classes = useStyles();

    const getAreas = async () => {
        const r: Route[] = await Route.retrieve((f) => ({ select: f.select('id', 'name', 'grade') }));
        setRoutes(r);
    };

    useEffect(() => {
        getAreas();
    }, []);

    return (
        <div className={classes.root}>
            <Grid container direction="row">
                <Grid item xs={1} />
                <Grid item xs={11}>
                    <PaginatedTable data={routes} />
                </Grid>
                <Grid item xs={2} />
            </Grid>

            {/* {routes &&
                routes.map((route, i) => (
                    <h1 key={i}>
                        <Link to={`/routes/${route.id}`}>
                            {route.name}: {route.grade}
                        </Link>
                    </h1>
                ))} */}
        </div>
    );
}
