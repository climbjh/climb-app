/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Climber } from '@src/generated';
import { Link } from 'react-router-dom';

export default function Climbers() {
    const [climbers, setClimbers] = useState([]);

    const getClimbers = async () => {
        const a: Climber[] = await Climber.retrieve((f) => ({ select: f.select('id', 'name') }));
        setClimbers(a);
    };

    useEffect(() => {
        getClimbers();
    }, []);

    return (
        <div>
            {climbers &&
                climbers.map((climber, i) => (
                    <h1 key={i}>
                        <Link to={`/climbers/${climber.id}`}>
                            {climber.name}: {climber.id}
                            <br />
                        </Link>
                    </h1>
                ))}
        </div>
    );
}
