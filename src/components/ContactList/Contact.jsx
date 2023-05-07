import React from 'react';

const Contact = ({ contact, onClick }) => {
  const { id, name, number } = contact;

  return (
    <li key={id}>
      <p>
        {name}: <p>{number}</p>
      </p>

      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
