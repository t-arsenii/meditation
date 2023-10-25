import React from 'react';
import styles from './styles.module.css'; 
import logo2 from './images/logo2.png'
import home from './images/home.png'
import music from './images/music.png'
import chat from './images/chat.png'
import profil from './images/profil.png'
import calendar from './images/calendar.png'
import books from './images/books.png'
import logout from './images/logout.png'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkIsAuth } from '../../redux/features/auth/authSlice';
function Main({ name }) {
  //const isAuth = useSelector(checkIsAuth)
    const location = useLocation();
    const { pathname } = location;
    const excludedPaths = ['/hello' , '/' , '/registration' , '/logging' , '/starttest' , '/endtest' , '/question1' , '/question2' , '/question3' ];

    if (excludedPaths.includes(pathname)) {
        return null;
      }
  return (
    <div className={styles.body}>
      <div className={styles.oval}></div>
      <div className={styles.leftRectangle}></div>

      <div className={styles.textOverRectangle}>
        <img src={logo2} alt="Logo" />
        <div className={styles.textOver}>
          <img src={home} alt="Home Icon" />
          <Link to="/main"><p>Główna</p></Link>
        </div>
        <div className={styles.textOver}>
          <img src={music} alt="Music Icon" />
          <a href="index.html">
          <Link to="/music"><p>Muzyka</p></Link>
          </a>
        </div>
        <div className={styles.textOver}>
          <img src={chat} alt="Chat Icon" />
          <Link to="/chat"><p>Czat</p></Link>
        </div>
        <div className={styles.textOver}>
          <img src={profil} alt="Profil Icon" />
          <Link to="/profil"><p>Profil</p></Link>
        </div>
        <div className={styles.textOver}>
          <img src={calendar} alt="Calendar Icon" />
          <Link to="/mood"><p>Nastrój</p></Link>
        </div>
        
        <div className={styles.textOver}>
          <img src={books} alt="Books Icon" />
          <Link to="/books"><p>Książki</p></Link>
        </div>
      </div>

      <div className={styles.logoutText}>
        <img src={logout} alt="Logout Icon" />
          <p>Wyloguj się</p>
      </div>
     </div>
  );
}

export default Main;
