import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_TRIPS } from '../utils/queries';
import { Link } from 'react-router-dom';


const TripList = () => {
    const { loading, data } = useQuery(QUERY_TRIPS)
    const user = data?.user || [];
    console.log(user)

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            {/* {trips &&
            trips.map((trip) => (
                <div key={trip._id} className="">
                    <h4 className="">{trip.destination}</h4>

                    <h4 className="">{trip.startDate}</h4>

                    <Link
                        to={`trips/${trip._id}`}>
                    View Trip Details
                    </ Link>
                </div>
            ))} */}
        </div>
    );
};

export default TripList;