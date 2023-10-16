import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; 
import facebook from './images/facebook.png';
import google from './images/google.png';
import twitter from './images/twitter.png';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();
    const handleTestClick = () => {
        navigate('/startTest');
      }
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
            <input type="pseudonym" id="pseudonym" name="pseudonym" placeholder="Wymyśl pseudonim" />
          </form>
  
          <div className={styles.termsAndConditions}>
            <p>
              Kontynuując zgadzasz się na nasze <span className="white-text"><span className="gray-text">Zasady i warunki</span></span>
            </p>
          </div>
  
          <button  className={styles.nextButton} onClick={handleTestClick}>Dalej</button>
  
          <div className={styles.lines}>
                 <div className={styles.line}></div>
                <span className={styles.or}>LUB</span>
                <div className={styles.line}></div>
         </div>
 

  
          <div className={styles.logoImages}>
            <img src={facebook} alt="Facebook" />
            <img src={google} alt="Google" />
            <img src={twitter} alt="Twitter" />
          </div>
  
          <div className={styles.terms}>
            <p>
              Posiadasz już konto? <Link to="/login" className={`${styles.whiteText} ${styles.grayText}`}> Zaloguj się </Link>

            </p>
          </div>
        </div>
      </div>
    );
  }


export default Registration;
