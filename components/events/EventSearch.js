import React, { useRef } from "react";
import classes from "./EventSearch.module.css";
import Button from "../ui/Button";

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onFindEventHandler(
      yearInputRef.current.value,
      monthInputRef.current.value
    );
  };

  return (
    <div className={classes.eventSearch__container}>
      <div>
        <label htmlFor="year">Year</label>
        <select id="year" ref={yearInputRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <select id="month" ref={monthInputRef}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <div>
        <Button label="Find Events" onClick={(e) => onSubmitHandler(e)} />
      </div>
    </div>
  );
}

export default EventSearch;
