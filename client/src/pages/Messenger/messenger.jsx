import styles from './styles.module.css'
import Navbar from '../../components/Navbar/navbar'
import Conversetion from '../../components/Conversations/Conversetions'
import Message from '../../components/Message/Message'
import ChatOnline from '../../components/ChatOnline/ChatOnline'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect , useState } from 'react'
import axios from "axios"

export default function Messenger(){
  
  const user = useSelector(state => state.auth.user)
  const userId = useSelector(state => state.auth.user?._id)
  
  const [conversetions , setConversations] = useState([])

  useEffect(() =>{
     const getConversations = async ()=>{
      try{
      const res = await axios.get(`/conversations/${userId}`)
      //setConversations(res.data)
      console.log(res)
    }catch(err){
      console.log(err)
    }

     }
    getConversations();
  }, [userId])
  
    return(
        <>
        <Navbar />
        <div className={styles.messenger}>
               <div className={styles.chatMenu}>
                   <div className={styles.chatMenuWrapper}>
                   <input placeholder="Search for friends" className="chatMenuInput" />
                   {conversetions.map(c=>(
                        <Conversetion  conversetions={c}/>
                   ))}

                   
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