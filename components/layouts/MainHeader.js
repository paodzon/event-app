import React from 'react';
import classes from './MainHeader.module.css';
import Button from '../ui/Button';
import Link from 'next/link';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div><h1>Logo</h1></div>
      <div className={classes.header__nav}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/events'>Events</Link></li>
          <li><Button label='Login'/></li>
        </ul>
      </div>
    </header>
  )
}

export default MainHeader