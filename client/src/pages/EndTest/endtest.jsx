import React from 'react';
import styles from './styles.module.css'; 
import img1 from './images/img1.png';

function EndTest() {
  return (
    <div className={styles.body}>
      <div className={styles.oval}></div>
      <div className={styles.centeredContent}>
        <p>
        Dziękuję! 
        Teraz możemy wybrać dla Ciebie najlepsze medytacje
        </p>
        
      </div>
      <div className={styles.centeredImageContainer}>
        <img src={img1} alt="Image" className={styles.centeredImage} />
      </div>
      <div className={styles.centeredButtonContainer}>
      <button
        className={styles.startButton}
        onClick={() => {
          window.location.href = '/main';
        }}
      >
        START
      </button></div>
    </div>
  );
}

export default EndTest;
