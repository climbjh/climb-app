/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Climber } from '@src/generated';
import { useParams } from 'react-router-dom';

export default function Profile() {
    const [climbers, setClimbers] = useState([]);
    const [profile, setProfile] = useState(null);

    const params = useParams();

    const getClimbers = async () => {
        const a: Climber[] = await Climber.retrieve((f) => ({ select: f.select('id', 'name') }));
        setClimbers(a);
    };

    useEffect(() => {
        getClimbers();
    }, []);

    const getProfile = () => {
        const p: Climber = climbers.find((c: Climber) => c.id === params);
        setProfile(p);
        console.log('climbers: ', climbers);
        console.log('profile: ', profile);
        console.log('params: ', params);
    };

    useEffect(() => {
        getProfile();
    }, [climbers]);

    return (
        <div>
            <h1>HALP</h1>
        </div>
    );
}
