import React, { useEffect, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import styles from './styles.module.css'; 
import facebook from './images/facebook.png';
import google from './images/google.png';
import twitter from './images/twitter.png'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginUser } from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

function Logging() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const { status } = useSelector((state) => state.auth)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (status) toast(status)
        if (isAuth) navigate('/main')
        //if (isAuth) navigate('/questions')

    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }))
           // navigate('/hello')
        } catch (error) {
            console.log(error)
        }
    }

      return (
        <div className={styles.body}>
          <div className={styles.oval}></div>
    
          <div className={styles.centeredСontent}>
            <h1 className={styles.registrationTitle}>Logowanie</h1>
    
            <form className={styles.form}>
              <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
            </form>
            <form className={styles.form}>
              <input type="password" id="password" name="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)}
                   />
            </form>
    
            <div className={styles.termsAndConditions}>
            <p>
              Kontynuując zgadzasz się na nasze{' '}
              <span className={`${styles.whiteText} ${styles.grayText}`}>
                Zasady i warunki
              </span>
            </p>
            </div>
            <div className={styles.contentDown}>
            <div className={styles.nextButton}  onClick={handleSubmit}>Dalej</div>
    
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
              Nie masz konta?  <Link to="/registration" className={`${styles.whiteText} ${styles.grayText}`}> Zarejestruj się </Link>
  
              </p>
            </div>
            </div>
          </div>
        </div>
      );
    }
  
  
  export default Logging;