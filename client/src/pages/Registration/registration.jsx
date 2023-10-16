import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; 
import facebook from './images/facebook.png';
import google from './images/google.png';
import twitter from './images/twitter.png';

function Registration() {
    return (
      <div className={styles.body}>
        <div className={styles.oval}></div>
  
        <div className={styles.centeredСontent}>
          <h1 className={styles.registrationTitle}>Rejestracja</h1>
  
          <form className={styles.form}>
            <input type="email" id="email" name="email" placeholder="Email" />
          </form>
          <form className={styles.form}>
            <input type="password" id="password" name="password" placeholder="Hasło" />
          </form>
  
          <form className={styles.form}>
            <input type="password_repeat" id="password_repeat" name="password_repeat" placeholder="Powtórz hasło" />
          </form>
  
          <form className={styles.form}>
            <input type="pseudonym" id="pseudonym" name="pseudonym" placeholder="Wymyśl pseudonim" />
          </form>
  
          <div className={styles.termsAndConditions}>
            <p>
              Kontynuując zgadzasz się na nasze <span className="white-text"><span className="gray-text">Zasady i warunki</span></span>
            </p>
          </div>
  
          <Link to="/test_start" className={styles.nextButton}>Dalej</Link>
  
          <div className={styles.lines}>
            <hr className="line-left" />
            <span className={styles.or}>LUB</span>
            <hr className="line-right" />
          </div>
  
          <div className={styles.logoImages}>
            <img src={facebook} alt="Facebook" />
            <img src={google} alt="Google" />
            <img src={twitter} alt="Twitter" />
          </div>
  
          <div className={styles.terms}>
            <p>
              Posiadasz już konto? <Link to="/login" className={`${styles.whiteText} ${styles.grayText}`}> Zaloguj się
</Link>

            </p>
          </div>
        </div>
      </div>
    );
  }


export default Registration;
