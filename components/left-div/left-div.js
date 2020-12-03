import React, {useEffect, useState} from 'react'
import styles from './left-div.module.css'

import cn from 'classnames'
import StoreContext from "../store/store";

import Header from "../header/header";
import TextPrice from "../text/text-price";
import Details from "../details/details";


function LeftDiv({className,header="HP Z3700 Kablosuz Mouse Bordo",price="125.90",...props}){
    return (
    <div className={cn(styles.left && className)}{...props}>
        <Header children={header}/>
        <TextPrice children={price}/>
        <Details/>
    </div>)
}
export default LeftDiv