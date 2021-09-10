/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { ClimbingArea as Area } from '@src/generated';

import Button from '@material-ui/core/Button';

export default function Areas() {
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
            {areas &&
                areas.map((area, i) => (
                    <h1 key={i}>
                        {area.name} [{area.state}]
                    </h1>
                ))}
        </div>
    );
}
