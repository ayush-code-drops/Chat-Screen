import React from 'react'
import Inbox from './Inbox'
import Messaging from './Messaging'
import styles from './styles.module.css';
function Chat() {
  return (
      <div className={styles.chatApp}>
          <Inbox />
        <Messaging/>
    </div>
  )
}

export default Chat