import React from 'react';

import EventsListComponent from '../../components/Event/EventsList/EventsList';

function EventsList() {
  const events = [
    {
      id: 'e1',
      title: 'Some event 1',
      date: '19:30',
      image: ''
    },
    {
      id: 'e2',
      title: 'Some event 2',
      date: '18:30',
      image: ''
    },
    {
      id: 'e3',
      title: 'Some event 3',
      date: '17:30',
      image: ''
    }
  ];

  return (
      <>
        <EventsListComponent events={events}/>
      </>
  );
}

export default EventsList;