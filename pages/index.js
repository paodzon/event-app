import React from "react";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

import classes from './index.module.css';
const HomePage = () => {
  const events = getFeaturedEvents();

  return <div className={classes.homePage}><EventList events={events}/></div>;
};

export default HomePage;
