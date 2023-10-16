import React, { useEffect } from 'react';
import styles from './styles.module.css';
import logoImage from './images/woman.png';
import { Link } from 'react-router-dom'; 

function Hello() {
  

  return (
    <div className={styles.body}>
      <div className={styles.oval}></div>
      <div className={styles.textContainer}>
        <p className={styles.welcomeText}>Witamy w SereneAstro</p>
        <p className={styles.subtext}>Rozpocznijmy przygodę w świecie medytacji i spokoju</p>
        <Link to="/frontend/src/pages/Registration/registration.jsx" className={styles.startButton}>START</Link>
        <p className={styles.accountText}>Masz konto? <a href="#">Logowanie</a></p>
      </div>
      <img src={logoImage} alt="woman" className={styles.topImage} />
    </div>
  );
}

export default Hello;
