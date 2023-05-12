import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import classes from './EventPage.module.css';

function FilteredEventsPage(props) {
  const router = useRouter();
  const { filteredEvents } = props;

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

export const getServerSideProps = (context) => {
  const { params } = context;
  const yearEventValue = +params.slug[0];
  const monthEventValue = +params.slug[1];
  const filteredEvents = getFilteredEvents({year: yearEventValue, month: monthEventValue});
  return { props: { filteredEvents }}
}

export default FilteredEventsPage