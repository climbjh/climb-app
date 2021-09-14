/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { ClimbingArea as Area } from '@src/generated';
import { useParams, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default function AreaDetailPage() {
    const [areas, setAreas] = useState([]);
    const [area, setArea] = useState(null);

    const params = useParams();
    const history = useHistory();

    const getareas = async () => {
        const rte: Area[] = await Area.retrieve((f) => ({ select: f.select('id', 'name', 'state') }));
        setAreas(rte);
        setArea(rte.find((r) => r.id === params.area_id));
    };

    useEffect(() => {
        getareas();
    }, []);

    return (
        <div>
            <h1>Name: {area && area.name}</h1>
            <h1>State: {area && area.state}</h1>
            <Button variant="contained" onClick={() => history.push('/areas')}>
                BACK
            </Button>
        </div>
    );
}
