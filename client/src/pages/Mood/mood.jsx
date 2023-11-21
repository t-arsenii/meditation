import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Calendar from 'react-calendar';
import './Calendar.css';
import Modal from 'react-modal';
import styles from './styles.module.css';
import close from './images/close.png';
import good from './images/good.png';
import bad from './images/bad.png';
import Chart from 'chart.js/auto';
//import { addMoodRecord, fetchMoodData, selectMoodData, setError, setLoading, setMoodData, addMoodRecord } from '../../redux/features/moodSlice';
//import axiosInstance from '../../utils/axios';
//import { selectUserId } from '../../redux/features/auth/authSlice';
import { addMoodRecord,getMoodData } from '../../redux/features/moodSlice';

function MoodCalendar() {
  const state = useSelector(state => state)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState('');
  const [moodData, setMoodData] = useState({});

  const userId = useSelector(state => state.auth.user?._id)
 // const moodEntry = moodData && moodData[selectedDate.toDateString()];
  // Rename state variable to avoid conflict
  const [localMoodData, setLocalMoodData] = useState({});
  const moodEntry = localMoodData && localMoodData[selectedDate.toDateString()];
 

  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null); // Reference to the Chart instance

  useEffect(() => {
    console.log('Mood Data:', moodData);
    // Create chart data
    const labels = Object.keys(moodData);
    const data = labels.map((date) => moodData[date]?.mood === 'good' ? 1 : moodData[date]?.mood === 'bad' ? -1 : 0);
    
    setChartData({
      labels,
      datasets: [
        {
          label: 'Mood Data',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, [moodData]);
  

  useEffect(() => {
    // Destroy the previous Chart instance
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Render chart
    if (chartData) {
      const ctx = document.getElementById('moodChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartData]);

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
  

  useEffect(() => {
    console.log('Fetching mood data from localStorage');
    const storedMoodData = localStorage.getItem('moodData');
    console.log('Raw Stored Mood Data:', storedMoodData);
    if (storedMoodData) {
      const parsedData = JSON.parse(storedMoodData);
      console.log('Setting local mood data:', parsedData);
      setLocalMoodData(parsedData);
    }
  }, []);
  
  

  const handleMoodSelection = async (mood) => {
    setMoodData((prevMoodData) => ({
      ...prevMoodData,
      [selectedDate.toDateString()]: { mood, userId },
    }));
    dispatch(addMoodRecord({ userId, date: selectedDate, mood }));
    closeModal();
  };
  
  
  useEffect(() => {
    if (userId) {
      dispatch(getMoodData(userId));
    }
  }, [dispatch, userId]);


// Now render your component with the mood data

  

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
// Save moodData to local storage
useEffect(() => {
  localStorage.setItem('moodData', JSON.stringify(moodData));
}, [moodData]);

// Retrieve moodData from local storage when component initializes
// Retrieve moodData from local storage when component initializes
useEffect(() => {
  const storedMoodData = localStorage.getItem('moodData');
  if (storedMoodData) {
    setLocalMoodData(JSON.parse(storedMoodData));
  }
}, []);




  
useEffect(() => {
  if (userId) {
    dispatch(getMoodData(userId)).then((data) => {
      const formattedMoodData = {};
      
      // Check if data is an array before using reduce
      if (Array.isArray(data)) {
        data.forEach((moodEntry) => {
          const dateString = new Date(moodEntry.date).toDateString();
          formattedMoodData[dateString] = { mood: moodEntry.mood, userId: moodEntry.userId };
        });
      }

      setMoodData(formattedMoodData);
    });
  }
}, [dispatch, userId]);


const tileContent = ({ date, view }) => {
  if (view === 'month') {
    const dateString = date.toDateString();
    const moodEntry = moodData[dateString];

    if (moodEntry) {
      const mood = moodEntry.mood;
      const isUserEntry = moodEntry.userId === userId;

      if (mood === 'good' && isUserEntry) {
        return (
          <div style={{ color: 'green', fontWeight: 'bold' }}>
            Good
            <div>{mood}</div>
          </div>
        );
      } else if (mood === 'bad' && isUserEntry) {
        return (
          <div style={{ color: 'red', fontWeight: 'bold' }}>
            Bad
            <div>{mood}</div>
          </div>
        );
      }
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
  {moodData[selectedDate.toDateString()]?.mood || 'Nie wybrano nastroju'}
</p>


        
        </div>
      </Modal>
      <div className={styles.pageHeadertwo}>
      Tylko Ty jesteś twórcą swojego nastroju    
      <p>User: {state.auth.user.username}</p>
      <p>Email: {state.auth.user.email}</p>
      <ul>
      {state.auth.user.mood.map((moodId, index) => (
  <li key={index}>
    {moodId.date ? `Date: ${new Date(moodId.date).toLocaleDateString()} | ` : 'Date: Invalid Date | '}
    Mood ID: {moodId}
  </li>
))}

    </ul>
           
    <canvas id="moodChart" width="400" height="200"></canvas>
      </div>
        
      
    </div>
  );
}

export default MoodCalendar;
