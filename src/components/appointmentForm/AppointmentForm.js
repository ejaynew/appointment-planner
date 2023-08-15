import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Appointment name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
        <input
          type="time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        ></input>
        <ContactPicker contacts={contacts} setContact={setContact} value={contact} name={name}/>
        <input type="submit"></input>
      </form>
    </>
  );
};
