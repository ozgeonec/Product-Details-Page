import React from 'react'
import styles from './text-price.module.css'

function TextPrice({children}){
    return <p className={styles.text}>
        {children}TL
    </p>
}
export default TextPrice