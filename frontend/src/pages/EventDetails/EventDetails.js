import React from 'react';
import {json, useRouteLoaderData} from 'react-router-dom';
import EventItem from '../../components/Event/EventItem/EventItem';

function EventDetails() {
  const data = useRouteLoaderData('event-details');

  return (
      <>
        <EventItem
          event={data.event}
        />
      </>
  );
}

export default EventDetails;

export async function fetchEventLoader({params}) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

  if (!response.ok) {
    throw json({message: 'Could not fetch event details'}, {status: 500});
  } else {
    return response;
  }
}