/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Home Page Fools
            </Typography>
            <Button color="primary" variant="contained">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/apex/climb_app/areas">
                    Areas
                </Link>
            </Button>
            <Button color="primary" variant="outlined">
                <Link style={{ textDecoration: 'none' }} to="/apex/climb_app/profile">
                    Profile
                </Link>
            </Button>
            <Button color="primary" variant="contained">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/apex/climb_app/routes">
                    Routes
                </Link>
            </Button>
        </div>
    );
}
