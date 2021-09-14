/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Climber } from '@src/generated';
import { useParams, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default function Profile() {
    const [climbers, setClimbers] = useState([]);
    const [profile, setProfile] = useState(null);

    const params = useParams();
    const history = useHistory();

    const getClimbers = async () => {
        const a: Climber[] = await Climber.retrieve((f) => ({ select: f.select('id', 'name', 'address', 'numberOfAscents', 'phoneNumber') }));
        setClimbers(a);
        setProfile(a.find((c) => c.id === params.climber_id));
    };

    useEffect(() => {
        getClimbers();
    }, []);

    return (
        <div>
            <h1>Name: {profile && profile.name}</h1>
            <h1>Phone Number: {profile && profile.phoneNumber}</h1>
            <h1>Number of Ascents: {profile && profile.numberOfAscents}</h1>
            <Button variant="contained" onClick={() => history.push('/climbers')}>
                Back
            </Button>
        </div>
    );
}
