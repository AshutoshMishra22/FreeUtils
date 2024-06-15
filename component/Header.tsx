import React from 'react';
import styles from './Header.module.scss';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <input type='search' />
    </header>
  );
}
