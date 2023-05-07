import React from 'react';
import css from './Contact.module.css';

const Contact = ({ contact, onClick }) => {
  const { name, number } = contact;

  return (
    <li className={css.contact}>
      <span className={css.name}>{name}:</span>
      <span className={css.number}>{number}</span>

      <button className={css.button} type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
