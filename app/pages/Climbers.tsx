/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Climber } from '@src/generated';
import { Link, useHistory } from 'react-router-dom';

export default function Climbers() {
    const [climbers, setClimbers] = useState([]);

    const history = useHistory();

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
                climbers.map((climber, index) => (
                    <Link key={index} to={`/climbers/${climber.id}`}>
                        {climber.name}: {climber.id}
                        <br />
                    </Link>
                ))}
        </div>
    );
}
