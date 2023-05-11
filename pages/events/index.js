import React from 'react'
import { getAllEvents } from '@/dummy-data'
import classes from './EventPage.module.css';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import { useRouter } from 'next/router';

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const onFindEventHandler = (year, month) => {
    console.log({year,month});
    router.push(`/events/${year}/${month}`)
  };

  return (
    <div className={classes.event__container}>
      <EventSearch onFindEventHandler={onFindEventHandler}/>
      <EventList events={events}/>
    </div>
    
  )
}

export default EventsPage