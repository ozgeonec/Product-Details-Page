import React, {useEffect, useState} from 'react'
import styles from './left-div.module.css'
import Header from "../header/header";
import TextPrice from "../text/text-price";
import Button from "../button/button";
import cn from 'classnames'
import Details from "../details/details";

function LeftDiv({className,header="HP Z3700 Kablosuz Mouse Bordo",price="125.90"}){
    const [isClickedKey,setClickedKey]= useState(false)

    const handleClick = () =>{
        setClickedKey(!isClickedKey)

    }
    useEffect(() => {
        if (isClickedKey === false) return;
        const timer = setTimeout(() => setClickedKey(!isClickedKey), 3000);
        return () => clearTimeout(timer);
    }, [isClickedKey]);
    return <div className={cn(styles.left && className)}>
        <Header children={header}/>
        <TextPrice children={price}/>
        <div className={styles.buttons}>
            <Button  onClick={handleClick}
                     clicked={isClickedKey}
                     children={isClickedKey ? "Sepete Eklendi" : "Sepete Ekle"}
            />
        </div>
        <Details/>
    </div>
}
export default LeftDiv