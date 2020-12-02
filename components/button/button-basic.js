import React from 'react'
import styles from './button-basic.module.css'
import cn from 'classnames'

function ButtonBasic({children, ...props}){
    return <button className={styles.basic} {...props}>
        {children}
    </button>
}
export default ButtonBasic