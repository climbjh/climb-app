/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default function Routes() {
    return (
        <div>
            <h1>Routes</h1>
            <Button variant="contained">
                <Link to="/">Home</Link>
            </Button>
        </div>
    );
}
