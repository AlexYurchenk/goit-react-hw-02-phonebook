import React from 'react';
import styles from './Filter.module.css'
const Filter = ({ value, onChange }) => (
  <label>
    Filter by name
    <input className={styles.FilterInput} type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;