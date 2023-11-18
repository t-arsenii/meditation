import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import logoImage from './images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function Homepage() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const fadeInProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });
  const blurInProps = useSpring({ from: { filter: 'blur(10px)' }, to: { filter: 'blur(0px)' }, config: { duration: 2000 } });

  useEffect(() => {
    setTimeout(function () {
      setRedirect(true);
    }, 5000);
  }, []);

  return (
    <div className={styles.bodyBlock}>
      {redirect && navigate('/hello')}
      <animated.div style={fadeInProps}>
        <div id="logo-container" className={`${styles.logoContainer} logoContainer`}>
          <animated.img src={logoImage} alt="logo" id="logo" style={blurInProps} className={`${styles.logoImage} animated`} />
          <p id="company-name" className={`${styles.companyName} animated`}>SERENEASTRO</p>
        </div>
      </animated.div>
    </div>
  );
}

export default Homepage;
