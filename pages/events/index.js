import React from 'react'
import classes from './EventPage.module.css';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/helpers/api-utils';

function EventsPage(props) {
  const {events} = props;
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

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return { props: {events}, revalidate: 30 }
}
 
export default EventsPage