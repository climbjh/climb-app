/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Climber } from '@src/generated';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
    { id: '3', label: 'Number Of Ascents', api: 'numberOfAscents' },
    { id: '4', label: 'Phone Number', api: 'phoneNumber' },
    { id: '5', label: 'Address', api: 'address' },
];

export default function Climbers() {
    const classes = useStyles();
    const [climbers, setClimbers] = useState([]);

    const getClimbers = async () => {
        const a: Climber[] = await Climber.retrieve((f) => ({ select: f.select(columns.map((col) => col.api)) }));
        setClimbers(a);
    };

    useEffect(() => {
        getClimbers();
    }, []);

    return (
        <div className={classes.root}>
            <Grid container direction="row">
                <Grid item xs={1} />
                <Grid item xs={11}>
                    <PaginatedTable records={climbers} columns={columns} />
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    );
}
