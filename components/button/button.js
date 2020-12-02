import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'

function Button({children, clicked, ...props}){
    return <button className={cn(!clicked && styles.button, clicked && styles.clicked)}{...props}>
        {children}
    </button>
}
export default Button