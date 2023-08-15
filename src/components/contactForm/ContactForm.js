import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  checkIsDuplicate,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="tel"
          placeholder="123-456-7890"
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};
