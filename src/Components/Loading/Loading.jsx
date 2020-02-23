import React from 'react';
import styles from './Loading.module.css';
import clsx from 'clsx';

export default function Loading(props) {
  const {tiny, small, medium, large} = props;
  
  const className = clsx(styles.loading, {
    [styles.tiny]: tiny,
    [styles.small]: small,
    [styles.medium]: medium,
    [styles.large]: large,
  })
  return (
    <div className={className}></div>
  )
}
