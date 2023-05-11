import React from 'react'
import Link from 'next/link';
import classes from './Button.module.css';

function Button({ label, onClick }) {
  return <button className={classes.button} onClick={onClick}>{label}</button>
}

export default Button