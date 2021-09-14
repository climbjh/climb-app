/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Route } from '@src/generated';
import { useParams, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default function RouteDetailPage() {
    const [routes, setRoutes] = useState([]);
    const [route, setRoute] = useState(null);

    const params = useParams();
    const history = useHistory();

    const getRoutes = async () => {
        const rte: Route[] = await Route.retrieve((f) => ({ select: f.select('id', 'name', 'grade') }));
        setRoutes(rte);
        setRoute(rte.find((r) => r.id === params.route_id));
    };

    useEffect(() => {
        getRoutes();
    }, []);

    return (
        <div>
            <h1>Name: {route && route.name}</h1>
            <h1>Grade: {route && route.grade}</h1>
            <Button variant="contained" onClick={() => history.push('/routes')}>
                BACK
            </Button>
        </div>
    );
}
