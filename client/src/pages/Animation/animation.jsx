import React , { useEffect , useState } from 'react';
import styles from  './styles.module.css';
import star from './images/star.png'


function Aimation() {
  const numStars = 70; // Number of stars you want to display

  const starElements = [];

  for (let i = 0; i < numStars; i++) {
    const style = {
      top: `${25 + Math.random() * 60}vh`, // Random top position between 30vh and 100vh
      left: `${15 + Math.random() * 80}vw`, // Random left position between 70vw and 100vw
      animationDelay: `${Math.random() * 5}s`,
    };

    starElements.push(
      <img
        key={i}
        src={star}
        alt={`Star ${i}`}
        className={styles.star}
        style={style}
      />
    );
  }

  return <div className={styles.container}>{starElements}</div>;
}

export default Aimation;

