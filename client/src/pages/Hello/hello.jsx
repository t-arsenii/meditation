import React from 'react';
import styles from './styles.module.css';
import logoImage from './images/woman.png';
import { Link , useNavigate} from 'react-router-dom';

const Hello = () => {
  const navigate = useNavigate();
  const handleRegistrationClick = () => {
    navigate('/registration');
  }

  
  return (
    <div className={styles.body}>
      <div className={styles.oval}></div>
      <div className={styles.textContainer}>
        <p className={styles.welcomeText}>Witamy w SereneAstro</p>
        <p className={styles.subtext}>Rozpocznijmy przygodę w świecie medytacji i spokoju</p>
        <button className={styles.startButton} onClick={handleRegistrationClick}>START</button>
        <p className={styles.accountText}>Masz konto? <Link to="/logging">Logowanie</Link> </p>
      </div>
      <img src={logoImage} alt="woman" className={styles.topImage} />
    </div>
  );
}

export default Hello;
