/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Route } from '@src/generated';

export default function Routes() {
    const [routes, setRoutes] = useState([]);

    const getAreas = async () => {
        const r: Route[] = await Route.retrieve((f) => ({ select: f.select('id', 'name') }));
        setRoutes(r);
    };

    useEffect(() => {
        getAreas();
    }, []);

    return <div>{routes && routes.map((route) => <h1>{route.name}</h1>)}</div>;
}
