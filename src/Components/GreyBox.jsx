import React from 'react'
import styles from './styles.module.css'
function GreyBox() {
  return (
      <div className={styles.greybox}>
       <div className={styles.inboxGrey}>
                <div className={styles.allMessages} >
                    messages
                </div>
                <div className={styles.unread}>
                    Unread-5
                </div>
          </div>
          <hr />
          <div className={styles.messageGrey}>
        <div>
          <h4>Company Name</h4>
          <p>Designation</p>

      </div>
      </div> 
    </div>
  )
}

export default GreyBox