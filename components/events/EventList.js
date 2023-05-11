import React from 'react'
import EventItem from './EventItem';

import classes from './EventList.module.css';

function EventList({events}) {
  return <div className={classes.eventList}>
    {events.map((event, idx) =><EventItem key={idx} event={event}/>)}
  </div>
}

export default EventList