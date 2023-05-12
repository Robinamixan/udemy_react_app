import React from 'react';

import EventForm from '../../components/Event/EventForm/EventForm';

function NewEvent() {
  return (
      <EventForm method={'post'}/>
  );
}

export default NewEvent;
