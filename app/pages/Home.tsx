/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClimbingArea as Area } from '@src/generated';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import cirqueImage from '@src/assets/images/cirque.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: '400px',
        alignItems: 'center',
    },
    marginTop: {
        marginTop: theme.spacing(2),
    },
}));

// interface AppState {
//     area: Area;
// }

export default function Home() {
    const classes = useStyles();

    const [areas, setAreas] = useState([]);

    const getAreas = async () => {
        const a: Area[] = await Area.retrieve((f) => ({ select: f.select('id', 'name', 'state') }));
        setAreas(a);
    };

    useEffect(() => {
        getAreas();
    }, []);

    return (
        <div>
            <Grid container direction="column" alignItems="center">
                <Grid item className={classes.marginTop}>
                    <Typography variant="h3" color="textSecondary">
                        The Climbing Project
                    </Typography>
                </Grid>
                <Grid item className={classes.marginTop}>
                    <img className={classes.root} src={cirqueImage} />
                </Grid>
                {areas &&
                    areas.map((area, i) => (
                        <Grid item key={i}>
                            <h1>{area.name}</h1>
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
}
