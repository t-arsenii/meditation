import React from 'react';
import styles from './styles.module.css'; 
import forward from './images/forward.png'
import main_img from './images/main_img.png'
import woman_main from './images/woman_main.png'
import add from './images/add.png'
import { useState, useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, getMe } from '../../redux/features/auth/authSlice';
import { getMeditations, getSavedMeditations, removeSavedMeditation} from '../../redux/features/meditationSlice';
import { MeditationItem } from './MeditationItem';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Main() {
   const dispatch = useDispatch();
   const {meditations, savedMeditations} = useSelector((state) => state.meditation)
  const state = useSelector(state => state)
  const username = useSelector(state => state.auth.user.username)
  const { userId } = useParams();
  const [selectedBlock, setSelectedBlock] = useState(null);
//console.log(`PARAMS TO ${userId}`)
   useEffect(() => {
    
       dispatch(getMeditations())
       
    }, [dispatch])

    useEffect(() => {
      if (userId) {
        dispatch(getSavedMeditations(userId));
      }
    }, [dispatch, userId]);
    

   //console.log(state);

   
   function onChecked(selectedBlock){
    //console.log(selectedBlock)
    setSelectedBlock(selectedBlock);//wybyraje medytacju
    console.log(`Selected Meitation ${selectedBlock}`)
    //console.log(user)

  }

   const handleRemove = (savedMeditationId) => {
    onChecked(savedMeditationId);
    try {
      const params = {id: userId, savedMeditationId: savedMeditationId}
      dispatch(removeSavedMeditation(params))
      console.log(`Meditation id ${savedMeditationId}`)
    } catch (error) {
      console.log(error)
    }
    console.log(state);
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
          
          <div className={styles.programnext}>
          <p>Rozpocznij 5-dniowy program</p>
          <Link to={`/program`}><img src={forward} alt="Forward Icon" className={styles.forward} /></Link></div>
          <img src={main_img} alt="Main Image" className={styles.mainImg} />
        </div>
       

        <div className={styles.accessible}>
          <p>Dostępne medytacje</p>
          <div className={styles.all}>
           <Link to={`/meditationsList`}>
           <p>Wszystko</p>
            </Link> 
           
          </div>
        </div>

        <div className={styles.blocksContainer}>
            {meditations?.slice(0, 4).map((meditation, i) => (
                            <div className={` ${styles.blockCommon}`} key={i}>
                                <MeditationItem i={i} meditation={meditation}></MeditationItem>
                            </div>
                        ))}
                    </div>

                    <div className={styles.accessible2}>
                        <p>Zapisane medytacje</p>
                        <div className={styles.all2}>
                        </div>
                    </div>
                    
</div>

      </div>
      </div>
     
    
  );
}

export default Main;
