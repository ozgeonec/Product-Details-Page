import React from 'react'
import styles from './navbar.module.css'
import {Heart, ShoppingCart, User} from "../icons";
import Button from "../button/button";
import ButtonBasic from "../button/button-basic";

function NavBar({notify=1}){
    return <div className={styles.navbar}>
        <div className={styles.pilot}>
            <User/>
            <Heart/>
            <ButtonBasic >{ <ShoppingCart/>}</ButtonBasic>
            {notify > 0 && <span className={styles.notify}>{notify}</span>}
        </div>
    </div>
}
export default NavBar