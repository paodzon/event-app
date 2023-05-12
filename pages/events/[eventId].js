import React from "react";
import { getEventById, getFeaturedEvents} from "@/helpers/api-utils";
import { useRouter } from "next/router";
import CalendarIcon from "../../components/icons/CalendarIcon";
import LocationIcon from "../../components/icons/LocationIcon";
import classes from "./EventDetailPage.module.css";
import Button from "@/components/ui/Button";

function EventDetailPage(props) {
  const router = useRouter();
  const {event} = props;
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

export const getStaticProps = async (context) => {
  const { params }= context;
  const event = await getEventById(params.eventId);
  return {props: { event }, revalidate: 30}
}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paramEvents = events.map((event) => ({params: {eventId: event.id}}));
  return { paths: paramEvents, fallback: true }
}

export default EventDetailPage;
