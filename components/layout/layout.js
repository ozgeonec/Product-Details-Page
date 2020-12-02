import React from 'react'
import styles from './layout.module.css'
import NavBar from "../navbar/navbar";
import Gallery from "../ImageGallery/gallery";
import LeftDiv from "../left-div/left-div";


function Layout(){
    return <div className={styles.layout}>
        <NavBar/>
        <Gallery className={styles.image} />
        <LeftDiv className={styles.left}/>
    </div>
}
export default Layout