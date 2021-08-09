import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_USER_TRIPS } from '../utils/queries';
import { Link } from 'react-router-dom';


const TripList = () => {
    const { loading, data } = useQuery(QUERY_USER_TRIPS)
    const user = data;
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        console.log("no data found")
    }
    const trips = user.userTrips.trips;


    return (
        <div>
            {trips &&
            trips.map((trip) => (
                <div key={trip._id} className="">
                    <h4 className="">{trip.destination}</h4>

                    <h4 className="">{trip.startDate}</h4>

                    <Link
                        to={`trips/${trip._id}`}>
                    View Trip Details
                    </ Link>
                </div>
            ))}
        </div>
    );
};

export default TripList;