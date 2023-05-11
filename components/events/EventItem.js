import React from "react";
import { useRouter } from "next/router";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import CalendarIcon from "../icons/CalendarIcon";
import LocationIcon from "../icons/LocationIcon";

function EventItem(props) {
  const router = useRouter();
  const { id, title, description, location, date, image } = props.event;
  return (
    <div className={classes.eventItem}>
      <div className={classes.eventItem__image}>
        <img src={image} width={300} />
      </div>
      <div className={classes.eventItem__details}>
        <h3>{title}</h3>
        <div className={classes.eventItem__details__icon}>
          <div className="d-flex"><CalendarIcon width={20} /> <p className="ml-10">{date}</p></div>
          <div className="d-flex"><LocationIcon width={20} /> <p className="ml-10">{location}</p></div>
        </div>
    
        <div className={classes.eventItem__button}>
          <Button label="Explore Event" onClick={(_) => router.push(`/events/${id}`)}></Button>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
