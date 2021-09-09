/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Route } from '@src/generated';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Home Page Fools
            </Typography>
        </div>
    );
}
