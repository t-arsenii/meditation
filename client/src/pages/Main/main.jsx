import React from 'react';
import styles from './styles.module.css'; 
import forward from './images/forward.png'
import main_img from './images/main_img.png'
import woman_main from './images/woman_main.png'
import add from './images/add.png'
import { useState, useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, getMe } from '../../redux/features/auth/authSlice';
import { getMeditations, getSavedMeditations} from '../../redux/features/meditationSlice';
import { MeditationItem } from './MeditationItem';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
function Main() {
   const dispatch = useDispatch();
   const {meditations, savedMeditations} = useSelector((state) => state.meditation)
  const state = useSelector(state => state)
  const username = useSelector(state => state.auth.user.username)
  const { userId } = useParams();

   useEffect(() => {
    
       dispatch(getMeditations())
       
    }, [dispatch])

    useEffect(() => {
      if (userId) {
        dispatch(getSavedMeditations(userId));
      }
    }, [dispatch, userId]);
    

   console.log(state);


   function addMeditatio(){
    

  }
  // <MeditationItem i= {i} meditation={meditation}>
  //               </MeditationItem>
  return (
    <div className={styles.body}>
      <div className={styles.oval}></div>
      <div className={styles.main}>
      <div className={styles.sideText}>
        <p>{`Cześć, ${username}`}</p>
        <p className={styles.textNext}>Uczyń swój dzień lepszym</p>

        <div className={styles.program}>
          
          <p>Rozpocznij 7-dniowy program</p>
          <Link to={`/program`}><img src={forward} alt="Forward Icon" className={styles.forward} /></Link>
        </div>
        <img src={main_img} alt="Main Image" className={styles.mainImg} />

        <div className={styles.accessible}>
          <p>Dostępne medytacje</p>
          <div className={styles.all}>
           <Link to={`/meditationsList`}>
           <p>Wszystko</p>
            </Link> 
           
          </div>
        </div>

        <div className={styles.blocksContainer}>
            {meditations?.map((meditation, i) => (
              <div className={styles.block}>
                              <MeditationItem i= {i} meditation={meditation}></MeditationItem> 
                              </div> 
                    ))}
                    
        </div>
        <div className={styles.accessible2}>
          <p>Zapisane medytacje</p>
          <div className={styles.all2}>
          </div>
        </div>
        <div className={styles.blocksContainer}>
          <div className={styles.blockAdd}>
          {
          savedMeditations?.map((savedMeditation, i) => (
            <div className={styles.block}>
              <img src={woman_main} alt="Woman Main"></img>
              {
              savedMeditation.title
            }
            </div>
          ))}  
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main;
