import React, {useEffect, useState} from 'react'
import styles from './layout.module.css'
import NavBar from "../navbar/navbar";
import Gallery from "../ImageGallery/gallery";
import LeftDiv from "../left-div/left-div";
import Button from "../button/button";
import StoreContext from "../store/store";


function Layout(){
    const [isClickedKey,setClickedKey]= useState(false)

    useEffect(() => {
        if (isClickedKey === false) return;
        const timer = setTimeout(() => setClickedKey(!isClickedKey), 2000);
        return () => clearTimeout(timer);
    }, [isClickedKey]);

    return <StoreContext.Provider value={{isClickedKey, setClickedKey}} >
    <div className={styles.layout}>
        <NavBar/>
        <Gallery className={styles.image}/>
        <LeftDiv className={styles.left}/>
        <div className={styles.buttons}>
            <Button  onClick={()=>{setClickedKey(!isClickedKey)}}
                     clicked={isClickedKey}
                     children={isClickedKey ? "Sepete Eklendi" : "Sepete Ekle"}
            />
        </div>
    </div>
    </StoreContext.Provider>
}
export default Layout