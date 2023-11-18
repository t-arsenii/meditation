import React ,{useEffect} from 'react';
import styles from './styles.module.css'; 
import img1 from './images/img1.png';
import { useDispatch, useSelector } from 'react-redux';
import { usePublishResult } from '../../hooks/setResult';
import * as Action from '../../redux/features/result_reducer'
import { Link , useNavigate} from 'react-router-dom';
function EndTest() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { questions : { que ,answers}, result : { result, userId}}  = useSelector(state => state);

  const publishResult = usePublishResult(); // Wywołaj hook w komponencie

  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()
  useEffect(() => {
    const { auth, result } = state;
    if (auth && auth.user && auth.user._id) {
      dispatch(Action.setUserId(auth.user._id)); // Ustaw userId w Redux store
    }
   // console.log(userId); 
    console.log(state);
    if (result && result.userId) {
      publishResult({ result, userId: result.userId }) // Dodaj userId do danych przekazywanych do publishResult
        .then((data) => {
          console.log(state)
          console.log("Data published successfully", data);
        })
        .catch((error) => {
          console.error("Error while publishing data", error);
        });
    }
  }, [dispatch, state, publishResult]);
  return (
    <div className={styles.bodyBlock}>
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
          navigate(`/main/${user._id}`)
        }}
      >
        START
      </button></div>
    </div>
  );
}

export default EndTest;
