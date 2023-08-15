import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currName, setCurrName] = useState("");
  const [currPhone, setCurrPhone] = useState("");
  const [currEmail, setCurrEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact(currName, currPhone, currEmail);
      setCurrName("");
      setCurrPhone("");
      setCurrEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const checkIsDuplicate = useEffect(() => {
    if (contacts.find((contact) => contact.name === currName)) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [currName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currName}
          setName={setCurrName}
          phone={currPhone}
          setPhone={setCurrPhone}
          email={currEmail}
          setEmail={setCurrEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
