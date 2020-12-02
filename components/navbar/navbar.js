import React from 'react'
import styles from './navbar.module.css'
import {Heart, ShoppingCart, User} from "../icons";

function NavBar(){
    return <div className={styles.navbar}>
        <div className={styles.pilot}>
            <User/>
            <Heart/>
            <ShoppingCart/>
        </div>
    </div>
}
export default NavBar