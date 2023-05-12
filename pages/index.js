import React from "react";
import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/helpers/api-utils";
import classes from './index.module.css';

const HomePage = (props) => {
  return <div className={classes.homePage}><EventList events={props.events}/></div>;
};

export const getStaticProps = async () =>{
  const featuredEvents = await getFeaturedEvents();
  return { props: { events: featuredEvents }, revalidate: 30};
}

export default HomePage;
