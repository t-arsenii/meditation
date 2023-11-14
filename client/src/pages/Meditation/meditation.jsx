import React, { useState, useEffect, useRef } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import styles from './styles.module.css';
import star from './images/star.png';
import Play from './images/Play.png';
import Stop from './images/Stop.png';
//import yourAudioFile from './audio/atmospherepiano.mp3';
import Next from './images/Next.png';

import { useParams } from 'react-router-dom';
function Meditation() {
  const state = useSelector(state => state)
  const {meditations, savedMeditation} = useSelector((state) => state.meditation);
  const { meditationId } = useParams();
  console.log(state);
  console.log(meditationId);
  let yourAudioFile;
 let meditationOne ;
meditations.forEach((meditation, i) => {
  // Użyj tutaj składni warunkowej
  if (meditation._id === meditationId) {
    // Tutaj użyj yourAudioFile
    meditationOne = meditation;
    yourAudioFile = meditation.audio.filename; //ЦЕ НАЗВА АУДИО ФАЙЛА!!!!!!!!!!
  }
});
console.log(meditationOne);
console.log(yourAudioFile);

  const numStars = 170; 

  const [cloudElements] = useState([]);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [audioPosition, setAudioPosition] = useState(0); 
  const [starsAnimated, setStarsAnimated] = useState(true); 
  const [isAudioLoaded, setIsAudioLoaded] = useState(false); 
  const [isAudioEnded, setIsAudioEnded] = useState(false); 
  const [showNextButton, setShowNextButton] = useState(false);
  
  const starElements = [];
  for (let i = 0; i < numStars; i++) {
    const starStyle = {
      top: `${25 + Math.random() * 60}vh`,
      left: `${15 + Math.random() * 80}vw`,
      animationDelay: `${Math.random() * 5}s`,
      animationPlayState: starsAnimated ? 'running' : 'paused', // Control animation state
    };

    starElements.push(
      <img
        key={`star-${i}`}
        src={star}
        alt={`Star ${i}`}
        className={styles.star}
        style={starStyle}
      />
    );
  }



  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = new Audio(yourAudioFile);

    const handleCanPlayThrough = () => {
      setIsAudioLoaded(true);
    };
console.log(`AUDIO ${audio}`)
    const handleEnded = () => {
      setIsPlaying(false);
      setStarsAnimated(true);
      setIsAudioEnded(true); // Встанови стан, що аудіо відтворено до кінця
      setShowNextButton(true); // Покажи кнопку "Далі" після завершення відтворення
    };

    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
    setStarsAnimated(!isPlaying);
  };
  
 
  return (
    <div className={styles.container}>
      {starElements}
      {cloudElements}
      
    
      <div className={styles.textOverlay}>
  <h1>{meditationOne.title}</h1>
</div>


      <div className={styles.audioControls}>
        {isAudioLoaded && (
          <button onClick={handleTogglePlay} className={styles.customButton}>
            <img
              src={isPlaying ? Stop : Play}
              alt={isPlaying ? 'Stop' : 'Play'}
              className={styles.controlIcon}
            />
          </button>
        )}
      </div>

      <audio ref={audioRef} src={yourAudioFile} />
    </div>
  );
}

export default Meditation;