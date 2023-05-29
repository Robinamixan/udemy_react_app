import React from 'react';
import {
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from 'react-router-dom';
import EventItem from '../../components/Event/EventItem/EventItem';
import EventsList from '../../components/Event/EventsList/EventsList';

function EventDetails() {
  const {eventPromise, eventsPromise} = useRouteLoaderData('event-details');

  return (
      <>
        <React.Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
          <Await resolve={eventPromise}>
            {(loadedEvent) => (
                <EventItem event={loadedEvent}/>
            )}
          </Await>
        </React.Suspense>
        <React.Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
          <Await resolve={eventsPromise}>
            {(loadedEvents) => (
                <EventsList events={loadedEvents}/>
            )}
          </Await>
        </React.Suspense>
      </>
  );
}

export default EventDetails;

async function fetchEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500});
    throw json({message: 'Could not fetch events'}, {status: 500});
  }

  const responseData = await response.json();

  return responseData.events;
}


async function fetchEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({message: 'Could not fetch event details'}, {status: 500});
  }

  const responseData = await response.json();

  return responseData.event;
}

export async function fetchEventLoader({params}) {
  return defer({
    eventPromise: await fetchEvent(params.eventId),
    eventsPromise: fetchEvents(),
  });
}

export async function deleteEventAction({params, request}) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: request.method
  });

  if (!response.ok) {
    throw json({message: 'Could not delete event details'}, {status: 500});
  }

  return redirect('/events');
}