import React from 'react'
import styles from './styles.module.css'
function IndividualBox({ data,handleClick }) {
   
   
  return (
      <div className={styles.inboxMessages} onClick={() => { handleClick(data.id) }}>
          <div className={styles.boxMaterial}>
              <div className={styles.dateDiv}>
                  <h5>{data.company_name}</h5>
                  <p>{data.date}</p>
              </div> 
          <p>{data.designation}</p>
          <p>{data.message}</p>
           </div>
          
          <hr />
       </div>
  )
}

export default IndividualBox