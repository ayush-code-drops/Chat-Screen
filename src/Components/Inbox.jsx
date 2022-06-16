import React from 'react'
import styles from './styles.module.css'
import data from '../db.json'
import IndividualBox from './IndividualBox';
function Inbox() {
    
    return (
        <div className={styles.inbox}>
            {
                data.map((item) => <IndividualBox key={item.id} data={item} />
                )
   }
 
        </div>
       
    );
}


export default Inbox