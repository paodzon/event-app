import React from "react";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import CalendarIcon from "../../components/icons/CalendarIcon";
import LocationIcon from "../../components/icons/LocationIcon";
import classes from "./EventDetailPage.module.css";
import Button from "@/components/ui/Button";

function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventId);
  console.log(event);

  if (event == null) {
    return (
      <div className={classes.eventDetails}>
        <h1>Event does not exists</h1>
      </div>
    );
  }

  return (
    <div className={classes.eventDetails}>
      <div className={classes.eventDetails__image}>
        <img src={event.image} />
      </div>
      <div className={classes.eventDetails__details}>
        <h1>{event.title}</h1>
        <div className="d-flex">
          <CalendarIcon width={20} /> <b className="ml-10">{event.date}</b>
        </div>
        <div className="d-flex">
          <LocationIcon width={20} /> <b className="ml-10">{event.location}</b>
        </div>
        <p>{event.description}</p>
        <div className={classes.eventDetails__button}>
          <Button label="Go Back" onClick={() => router.back()} />
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
