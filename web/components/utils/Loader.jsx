import React from 'react'
import styles from "../../styles/Home.module.css";

const Loader = () => {
    return (
        <>
            <div className={styles.loader} >
                <div className={`${styles["loader-child"]} border-b-[3px] md:border-b-[4px] lg:border-b-[5px] border-purple-600 w-[10vmax] h-[10vmax]`}></div>
            </div>
        </>
    )
}

export default Loader