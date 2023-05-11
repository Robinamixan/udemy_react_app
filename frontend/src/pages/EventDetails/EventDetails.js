import React from 'react';
import {useParams} from 'react-router-dom';

function EventDetails() {
  const params = useParams();

  return (
      <>
        <h2>Event Details page</h2>
        <p>Event ID: {params.eventId}</p>
      </>
  );
}

export default EventDetails;