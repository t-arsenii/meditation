import React from 'react';
import styles from './styles.module.css';
import { getMeditations } from '../../redux/features/meditationSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect }  from 'react';
import woman_main from './images/woman_main.png'

export const MeditationsList = () => {
    const dispatch = useDispatch();
    const {meditations} = useSelector((state) => state.meditation);

    useEffect(() => {
        dispatch(getMeditations());
    }, [dispatch]);

    return (    
      
      <div className={styles.body}>
        <div className={styles.blocksContainer}>
            {meditations?.map((meditation, i) => (
                <div className={styles.block} key={i}>
                    <img src={woman_main} alt="Meditation" />
                    <p>{meditation.title}</p>
                    <p>{meditation.description}</p>
                    <button>Zapisz</button>
                    <button>Przycisk</button>
                </div>
            ))}
        </div>
      </div> 
        
    );
}
