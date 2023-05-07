import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => {
      return (
        <Contact
          contact={contact}
          onClick={() => onDeleteContact(contact.id)}
        />
      );
    })}
  </ul>
);
export default ContactList;
