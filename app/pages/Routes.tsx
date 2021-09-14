/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Route } from '@src/generated';
import { makeStyles, Grid } from '@material-ui/core';

import PaginatedTable from './../components/PaginatedTable';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
    },
}));

const columns = [
    { id: '1', label: 'Id', api: 'id' },
    { id: '2', label: 'Name', api: 'name' },
    { id: '3', label: 'Grade', api: 'grade' },
    { id: '4', label: 'Height', api: 'height' },
];

export default function Routes() {
    const [routes, setRoutes] = useState([]);

    const classes = useStyles();

    const getAreas = async () => {
        const r: Route[] = await Route.retrieve((f) => ({ select: f.select(columns.map((col) => col.api)) }));
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
                    <PaginatedTable records={routes} columns={columns} />
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    );
}
