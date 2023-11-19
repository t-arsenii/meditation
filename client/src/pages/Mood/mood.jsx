import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Calendar from 'react-calendar';
import './Calendar.css';
import Modal from 'react-modal';
import styles from './styles.module.css';
import close from './images/close.png';
import good from './images/good.png';
import bad from './images/bad.png';
//import { addMoodRecord, fetchMoodData, selectMoodData, setError, setLoading, setMoodData, addMoodRecord } from '../../redux/features/moodSlice';
//import axiosInstance from '../../utils/axios';
//import { selectUserId } from '../../redux/features/auth/authSlice';
import { addMoodRecord,getMoodData } from '../../redux/features/moodSlice';

function MoodCalendar() {
  const state = useSelector(state => state)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState('');
  const [moodData, setMoodData] = useState([]);
  const userId = useSelector(state => state.auth.user?._id)
  const moodEntry = moodData && moodData[selectedDate.toDateString()];
  // Rename state variable to avoid conflict
  const localMoodData = useState({});
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMood('');
  };

  const dispatch = useDispatch();

  const mood = moodEntry ? moodEntry.mood : null;
  const isGoodMood = mood === 'good';
  

 

  const handleMoodSelection = async (mood) => {
    dispatch(addMoodRecord({ userId:userId ,date: selectedDate, mood: mood }));
    closeModal();
  };
  
  

  // const userId = useSelector((state) => state.auth.userId);
  // console.log('UserId from Selector:', userId);

  
  // const saveMoodToDatabase = async () => {
    
//   try {
//     const response = await axiosInstance.post('/addMood', {
//       userId,
//       date: selectedDate,
//       mood: selectedMood,
//     });

//     if (response.status === 201) {
//       console.log('Mood record added successfully');
//     } else {
//       console.error('Failed to add mood record');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     closeModal();
//   }
// };
  
useEffect(() => {
      if (userId) {
        dispatch(getMoodData(userId));
      }
    }, [dispatch, userId]);
    console.log(state);

  

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toDateString();
      const mood = moodData[dateString];
     // const mood = state.mood.moodData.date
      if (mood === 'good') {
        return <div style={{ color: 'green' }}>😄</div>;
      } else if (mood === 'bad') {
        return <div style={{ color: 'red' }}>😞</div>;
      }
    }
  
    return null;
  };
  
  
  // useEffect(() => {
  //   dispatch(fetchMoodData());
  // }, [dispatch]);
    
  

  return (
    <div className={styles.bodyBlock}>
      <div className={styles.body}></div>
      <div className={styles.back}></div>
      <div className={styles.pageHeader}>
          Kalendarz nastroju         
      </div>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        tileContent={tileContent}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Mood Record"
        shouldCloseOnOverlayClick={true}
        className={styles.customModal}
        ariaHideApp={false}
      >
         <div className={styles.customModalContent}>
         <button onClick={closeModal} className= {styles.imageButton}><img  src={close}/></button>
        <h2>Rekord nastroju dla {selectedDate.toLocaleDateString()}</h2>
        <label>Wybierz Nastrój: </label>
        <div>
          
          <img
    src={good}
    alt="Dobry Nastrój"
    onClick={() => handleMoodSelection('good') }
    className={isGoodMood ? styles.selectedMood : ''}
  />
  <img
    src={bad}
    alt="Zły Nastrój"
    onClick={() => handleMoodSelection('bad')}
    className={moodData[selectedDate.toDateString()] === 'bad' ? styles.selectedMood : ''}
  />
        </div>
        <p>
          {moodData[selectedDate.toDateString()] || 'Nie wybrano nastroju'}
        </p>

        
        </div>
      </Modal>
      <div className={styles.pageHeadertwo}>
      Tylko Ty jesteś twórcą swojego nastroju         
      </div>
     
      
    </div>
  );
}

export default MoodCalendar;
