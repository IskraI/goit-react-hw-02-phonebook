import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
};

export default Filter;
