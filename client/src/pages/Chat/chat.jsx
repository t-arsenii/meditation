import { useState, useEffect }  from 'react'
import styles from './styles.module.css';
import Search from './images/Search.png';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, setMessages , fetchUsers} from '../../redux/features/chatSlice';

function Chat() {

  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && selectedUser) {
      dispatch(addMessage({ content: newMessage, sender: 'currentUserId', receiver: selectedUser.id }));
      setNewMessage('');
    } else {
      // Handle error or display a message indicating the need to select a user
    }
  };
 // const dispatch = useDispatch();
  const users = useSelector((state) => state.users); // Assuming users are stored in Redux state

  useEffect(() => {
    dispatch(fetchUsers()); // Dispatch the fetchUsers action on component mount
  }, [dispatch]);

  console.log(users);

  return (
    <div className={styles.bodyBlock}>
      <div className={styles.chat}>
        <p>Czat</p>
      </div>
      <div className={styles.searchApp}>
        <div className={styles.searchContainer}>
          <img src={Search} alt="Search" className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Wyszukaj osób"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.noneSMS}>Brak powiadomień</div>
      <div className={styles.userSMS}>
      <select onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select a user</option>
          {users && users.length > 0 ? (
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))
          ) : (
            <option value="">No users available</option>
          )}
        </select>

        {messages ? (
        messages.map((message, index) => (
            <div className={styles.userBlock} key={index}>
            <div className={styles.userImg}>img</div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>{message.sender}</div>
              <div className={styles.userEndSMS}>{message.content}</div>
            </div>
            <div className={styles.smsData}>
              <p>{message.timestamp}</p>
            </div>
          </div>
        ))
        ) : (
          <p>No messages available</p>
        )}
         {users && users.length > 0 ? (
  users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ))
) : (
  <option value="">No users available</option>
)}


         <div className={styles.sendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>

        <div className={styles.allUsers}>
      <h2>All Users</h2>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users available</p>
      )}
    </div>
    </div>
    


      
    </div>
  );
}

export default Chat;