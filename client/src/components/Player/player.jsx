import React from 'react';
import styles from './styles.module.css';
import Play from './images/Play.png';
import Stop from './images/Stop.png';
import skipforward from './images/skipforward.png';
import skipbackward from './images/skipbackward.png';
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { checkIsAuth } from '../../redux/features/auth/authSlice';

function CustomAudioControls({ onSkipBackward, onPlayPause, isPlaying, onSkipForward }) {
    const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const location = useLocation();
    const { pathname } = location;
    const excludedPaths = ['/hello' , '/' , '/registration' , '/logging' , '/starttest' , '/endtest' , '/main/65463999e08bb842157de840' , '/mood' , '/music' ];
    if (excludedPaths.includes(pathname)) {
        return null;
      }
  return (
    <div className={styles.customAudioControls}>
      <button onClick={onSkipBackward} className={styles.skipBackwardButton}>
        <img src={skipbackward} alt="Rewind" />
      </button>
      <button onClick={onPlayPause} className={styles.playButton}>
        {isPlaying ? (
          <img src={Stop} alt="Stop" />
        ) : (
          <img src={Play} alt="Play" />
        )}
      </button>
      <button onClick={onSkipForward} className={styles.skipForwardButton}>
        <img src={skipforward} alt="Fast Forward" />
      </button>
    </div>
  );
}

export default CustomAudioControls;
