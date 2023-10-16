import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; 
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, checkIsAuth } from '../../redux/features/auth/authSlice'

function Registration() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = () => {
      try {
          dispatch(registerUser({ email, password,username }))
          setEmail('')
          setPassword('')
          setUsername('')
      } catch (error) {
          console.log(error)
      }
  }
    return (
      <div className={styles.body}>
        <div className={styles.oval}></div>
  
        <div className={styles.centeredСontent}>
          <h1 className={styles.registrationTitle}>Rejestracja</h1>
  
          <form className={styles.form}>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </form>
          <form className={styles.form}>
            <input type="password" id="password" name="password" placeholder="Hasło"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          </form>
  
          <form className={styles.form}>
            <input type="password_repeat" id="password_repeat" name="password_repeat" placeholder="Powtórz hasło" />
          </form>
  
          <form className={styles.form}>
            <input type="pseudonym" id="pseudonym" name="pseudonym" placeholder="Wymyśl pseudonim" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </form>
  
          <div className={styles.termsAndConditions}>
            <p>
              Kontynuując zgadzasz się na nasze <span className="white-text"><span className="gray-text">Zasady i warunki</span></span>
            </p>
          </div>
  
          <Link to="/test_start" className={styles.nextButton} onClick={handleSubmit}>Dalej</Link>
  
          <div className={styles.lines}>
            <hr className="line-left" />
            <span className={styles.or}>LUB</span>
            <hr className="line-right" />
          </div>
  
          <div className={styles.logoImages}>
            <img src="./images/facebook.png" alt="Facebook" />
            <img src="./images/google.png" alt="Google" />
            <img src="./images/twitter.png" alt="Twitter" />
          </div>
  
          <div className={styles.terms}>
            <p>
              Posiadasz już konto? <Link to="/login" className={`${styles.whiteText} ${styles.grayText}`}>
  Posiadasz już konto? Zaloguj się
</Link>

            </p>
          </div>
        </div>
      </div>
    );
  }


export default Registration;
