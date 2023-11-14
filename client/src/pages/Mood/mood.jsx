import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import Modal from 'react-modal';
import styles from './styles.module.css';
import close from './images/close.png'
import good from './images/good.png'
import bad from './images/bad.png'

function MoodCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moodData, setMoodData] = useState({});
  const [selectedMood, setSelectedMood] = useState(''); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMood(''); // Очищаємо обрану емоцію при закритті модального вікна
  };

  const handleMoodSelection = (mood) => {
    // Оновлюємо обрану емоцію та додаємо до стану moodData
    setSelectedMood(mood);
    setMoodData({ ...moodData, [selectedDate.toDateString()]: mood });
  };

  const saveMoodToDatabase = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/addMood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate,
          mood: selectedMood,
        }),
      });

      if (response.status === 201) {
        console.log('Mood record added successfully');
      } else {
        console.error('Failed to add mood record');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      closeModal();
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const mood = moodData[date.toDateString()];
      if (mood === 'good') {
        return <div style={{ color: 'green' }}>😄</div>;
      } else if (mood === 'bad') {
        return <div style={{ color: 'red' }}>😞</div>;
      }
    }
    return null;
  };

  return (
    <div>
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
      >
         <div className={styles.customModalContent}>
         <button onClick={closeModal} className= {styles.imageButton}><img  src={close}/></button>
        <h2>Rekord nastroju dla {selectedDate.toLocaleDateString()}</h2>
        <label>Wybierz Nastrój: </label>
        <div>
          
          <img
    src={good}
    alt="Dobry Nastrój"
    onClick={() => handleMoodSelection('good')}
    className={moodData[selectedDate.toDateString()] === 'good' ? styles.selectedMood : ''}
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
