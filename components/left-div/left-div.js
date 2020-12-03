import React from 'react'
import styles from './left-div.module.css'

import cn from 'classnames'

import Header from "../header/header";
import TextPrice from "../text/text-price";

function LeftDiv({className,header="HP Z3700 Kablosuz Mouse Bordo",price="125.90",...props}){
    return (
    <div className={cn(styles.left && className)}{...props}>
        <Header children={header}/>
        <TextPrice children={price}/>
    </div>)
}
export default LeftDiv