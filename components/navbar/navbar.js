import React, {useContext, useEffect, useState} from 'react'
import styles from './navbar.module.css'
import {Heart, ShoppingCart, User} from "../icons";
import ButtonBasic from "../button/button-basic";
import StoreContext from "../store/store";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {INFO} from "../constants/constants";

function NavBar({...props}){
    const store = useContext(StoreContext)
    const [notify, setNotify]=useState(0)
    const [onCart,setOnCart] = useState(false)
    const [count , setCount] = useState(0)
    const contentStyle = { position: "absolute",
        right: "5px", top:"50px",width:"300px",height:"140px" };

    useEffect(()=>{
        if (store.isClickedKey===false) return;
        setNotify(notify+1)
        setCount(count +1)
    },[store.isClickedKey])

    return (<div className={styles.navbar}{...props}>
        <div className={styles.pilot}>
            <User/>
            <Heart/>
            {count===0 && <ShoppingCart/>}
            {count >0 && <Popup on="hover"
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    trigger={<ButtonBasic onClick={() => {
                        setOnCart(!onCart)
                    }}>{<ShoppingCart/>} {notify > 0 && <span className={styles.notify}>{notify}</span>}</ButtonBasic>}
                    {...{contentStyle}}>
                {count > 0 && INFO.map((info) => {
                    return (<div className={styles.small}>
                        <img src={info.image} alt={"img"} className={styles.img}/>
                        <h1>{info.header}</h1>
                        <p>{info.price}</p>
                    </div>)
                })}
                <p>Adet:{count > 0 && count}</p>
                <button className={styles.smallButton}>Sepete git</button>
            </Popup>}
        </div>
    </div>)
}
export default NavBar