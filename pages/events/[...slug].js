import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import classes from './EventPage.module.css';

function FilteredEventsPage() {
  const router = useRouter();


  const yearEventValue = +router.query.slug[0];
  const monthEventValue = +router.query.slug[1];

  const filteredEvents = getFilteredEvents({year: yearEventValue, month: monthEventValue});
  
  const onFindEventHandler = (year, month) => {
    console.log({year,month});
    router.push(`/events/${year}/${month}`)
  };
  
  if(filteredEvents.length == 0 || filteredEvents == null){
    return <div className={classes.event__container}>
      <EventSearch onFindEventHandler={onFindEventHandler}/>
      No Events
      </div>
  }

  return (
    <div className={classes.event__container}>
      <EventSearch onFindEventHandler={onFindEventHandler}/>
      <EventList events={filteredEvents}/>
    </div>
  )
}

export default FilteredEventsPage