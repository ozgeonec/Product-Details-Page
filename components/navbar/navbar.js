import React, {useContext, useEffect, useState} from 'react'
import styles from './navbar.module.css'
import {Heart, ShoppingCart, User} from "../icons";
import ButtonBasic from "../button/button-basic";
import StoreContext from "../store/store";

function NavBar({...props}){
    const store = useContext(StoreContext)
    const [notify, setNotify]=useState(0)

    useEffect(()=>{
        if (store.isClickedKey===false) return;
        setNotify(notify+1)
    },[store.isClickedKey])

    return (<div className={styles.navbar}{...props}>
        <div className={styles.pilot}>
            <User/>
            <Heart/>
            <ButtonBasic>{<ShoppingCart/>} {notify > 0 && <span className={styles.notify}>{notify}</span>}</ButtonBasic>
        </div>
    </div>)
}
export default NavBar