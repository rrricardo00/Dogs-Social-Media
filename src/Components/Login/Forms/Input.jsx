import React from 'react'
import styles from './Input.module.css'

const Input = ({label, name, ...props}) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input id={name} className={styles.input} {...props}/>
        <p className={styles.error}>error</p>
    </div>
  )
}

export default Input