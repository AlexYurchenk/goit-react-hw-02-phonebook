
import React from 'react';
import styles from './ContactList.module.css'
const ContactList = ({ contacts, onDeleteContact}) => (
  <ul className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
        <li
        className={styles.ContactItem}
        key={id}
      >
        <p className={styles.ContactItemText}>{name}<span className={styles.ContactItemSpan}>{number}</span></p>
        <button
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;