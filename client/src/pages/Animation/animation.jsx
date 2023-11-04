import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import star from './images/star.png';
import cloud from './images/cloud.png';
import cloud1 from './images/cloud1.png';

function Animation() {
  const numStars = 70; // Number of stars you want to display
  const numClouds = 50; // Number of clouds you want to display initially

  const [cloudElements, setCloudElements] = useState([]);

  useEffect(() => {
    // Initialize clouds
    const initialClouds = [];
    for (let i = 0; i < numClouds; i++) {
      const cloudStyle = {
        top: `${25 + Math.random() * 60}vh`,
        left: `${20 + Math.random() * 80}vw`,
      };

      // Use cloud1 image for alternate clouds
      const cloudImage = i % 2 === 0 ? cloud : cloud1;

      initialClouds.push(
        <img
          key={`cloud-${i}`}
          src={cloudImage}
          alt={`Cloud ${i}`}
          className={styles.cloud}
          style={cloudStyle}
        />
      );
    }
    setCloudElements(initialClouds);

    // Periodically add new clouds
    const cloudInterval = setInterval(() => {
      const newCloudStyle = {
        top: `${25 + Math.random() * 60}vh`,
        left: `${20 + Math.random() * 80}vw`,
      };

      const newCloudImage = Math.random() < 0.5 ? cloud : cloud1; // Randomly choose cloud image

      setCloudElements((prevClouds) => [
        ...prevClouds,
        (
          <img
            key={`cloud-${prevClouds.length}`}
            src={newCloudImage}
            alt={`Cloud ${prevClouds.length}`}
            className={styles.cloud}
            style={newCloudStyle}
          />
        ),
      ]);
    }, 15000); // Adjust the interval as needed

    // Clean up the interval on component unmount
    return () => clearInterval(cloudInterval);
  }, []);

  const starElements = [];
  for (let i = 0; i < numStars; i++) {
    const starStyle = {
      top: `${25 + Math.random() * 60}vh`,
      left: `${15 + Math.random() * 80}vw`,
      animationDelay: `${Math.random() * 5}s`,
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

  return (
    <div className={styles.container}>
      {starElements}
      {cloudElements}
    </div>
  );
}

export default Animation;
