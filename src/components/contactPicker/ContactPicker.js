import React from "react";

export const ContactPicker = ({ contacts, setContact, value, name }) => {
  return (
    <>
      <select onChange={(e) => {setContact(e.target.value)}} value={value} name={name}>
        <option value="">No Contact Selected</option>
        {contacts.map(({name, phone}, index) => <option key={index} value={name}>{name}, {phone}</option>)}
      </select>
    </>
  );
};
