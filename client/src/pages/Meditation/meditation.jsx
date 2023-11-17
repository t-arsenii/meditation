// client/components/pages/Meditation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import star from './images/star.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getMeditations, streamAudio } from '../../redux/features/meditationSlice';

// Custom hook for handling data fetching and audio streaming
const useMeditation = (meditationId) => {
  const dispatch = useDispatch();
  const { meditations, loading } = useSelector((state) => state.meditation);
  const [yourAudioFile, setYourAudioFile] = useState('');

  useEffect(() => {
    // Fetch all meditations
    dispatch(getMeditations());

    // Find the selected meditation and set audio file
    const selectedMeditation = meditations.find((meditation) => meditation._id === meditationId);
    if (selectedMeditation) {
      setYourAudioFile(`/api/meditations/stream/${selectedMeditation.audio.file_id}`);
    }
  }, [dispatch, meditationId, meditations]);

  return { yourAudioFile, loading };
};

function Meditation() {
  const { meditationId } = useParams();
  const { yourAudioFile, loading, meditations } = useMeditation(meditationId); // Destructure meditations from the hook result
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [starsAnimated, setStarsAnimated] = useState(true);

  const numStars = 170;

  const starElements = [];
  for (let i = 0; i < numStars; i++) {
    const starStyle = {
      top: `${25 + Math.random() * 60}vh`,
      left: `${15 + Math.random() * 80}vw`,
      animationDelay: `${Math.random() * 5}s`,
      animationPlayState: starsAnimated ? 'running' : 'paused',
    };

    starElements.push(
      <img key={`star-${i}`} src={star} alt={`Star ${i}`} className={styles.star} style={starStyle} />
    );
  }

  const dispatch = useDispatch(); // Add this line to get the dispatch function

  useEffect(() => {
    audioRef.current = new Audio(yourAudioFile);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [yourAudioFile]);

  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        // Dispatch the streamAudio action when audio starts playing
        dispatch(streamAudio(meditationId));
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
      setStarsAnimated(!isPlaying);
    }
  };

  if (loading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {starElements}

      <div className={styles.textOverlay}>
        <h1>{meditations ? meditations.title : 'Loading...'}</h1>
      </div>

      <button onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default Meditation;
