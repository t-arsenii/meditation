import styles from './styles.module.css'
import Navbar from '../../components/Navbar/navbar'
import Conversetion from '../../components/Conversations/Conversetions'
import Message from '../../components/Message/Message'
import ChatOnline from '../../components/ChatOnline/ChatOnline'

export default function Messenger(){
    return(
        <>
        <Navbar />
        <div className={styles.messenger}>
               <div className={styles.chatMenu}>
                   <div className={styles.chatMenuWrapper}>
                   <input placeholder="Search for friends" className="chatMenuInput" />
                   <Conversetion />
                   <Conversetion />
                   <Conversetion />
                   <Conversetion />
                   <Conversetion />
                   </div>
               </div>
               <div className={styles.chatBox}>
                 <div className={styles.chatBoxWrapper}>
                    <div className={styles.chatBoxTop}>
                       <Message />
                       <Message own={true}/>
                       <Message />
                     </div>
                     <div className={styles.chatBoxBottom}>
                     <textarea
                    className={styles.chatMessageInput}
                    placeholder="write something..."
                  ></textarea>
                      <button className={styles.chatSubmitButton} >
                    Send
                  </button>
                     </div>
                  </div>
               </div>
               <div className={styles.chatOnline}>
               <div className={styles.chatOnlineWrapper}>
                       <ChatOnline />
                       <ChatOnline />
                       <ChatOnline />
                  </div>
               </div>
        </div></>
    )
}