import React from 'react'
import styles from './gallery.module.css'
import cn from 'classnames'


function Gallery({className, src='https://cdn.dsmcdn.com/ty11/product/media/images/20200903/13/9501424/84268728/0/0_org_zoom.jpg',alt}){

    return <div className={cn(styles.gallery && className)}>
        <img src={src} alt={alt} className={styles.image}/>
    </div>
}
export default Gallery