import React from 'react';
import styles from './styles.module.css';
import { getMeditations } from '../../redux/features/meditationSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect , useState}  from 'react';
import woman_main from './images/woman_main.png'
import { insertSavedMeditations } from '../../redux/features/meditationSlice';
import save from './images/save.png';
import { Link , useNavigate} from 'react-router-dom';
import { getSavedMeditations } from '../../redux/features/meditationSlice';

export const MeditationsList = () => {
  const state = useSelector(state => state)
  const {meditations, savedMeditation} = useSelector((state) => state.meditation);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const user = useSelector((state) => state.auth.user._id)
  const navigate = useNavigate()
  
  const dispatch = useDispatch();
  const [savedMeditationIds, setSavedMeditationIds] = useState([]);

    useEffect(() => {
        dispatch(getMeditations());
        console.log(state)
    }, [dispatch]);

    function onChecked(selectedBlock){
      //console.log(selectedBlock)
      setSelectedBlock(selectedBlock);//wybyraje medytacju
      console.log(selectedBlock)
      console.log(user)
 
    }
    const saveMeditation = async (index) => {
      onChecked(index);
      try {
        const params = { meditationId: index, userId: user };
        console.log("Params:", params);
    
        await dispatch(insertSavedMeditations(params));
    
        // Retrieve the updated savedMeditations after dispatching the insertSavedMeditations action
        const updatedSavedMeditation = await dispatch(getSavedMeditations(user));
    
        // Update the local state with the updated savedMeditations
        setSavedMeditationIds(updatedSavedMeditation.map((m) => m.meditationId));
    
        console.log(state);
      } catch (error) {
        console.error(error);
      }
    };
    
    function handleStart(index){
      navigate(`/meditation/${index}`)
    }
    useEffect(() => {
      if (savedMeditation) {
        setSavedMeditationIds(savedMeditation.map((m) => m.meditationId));
      }
    }, [savedMeditation]);
    useEffect(() => {
      // Оновити список збережених медитацій при завантаженні компонента
      dispatch(getMeditations());
    }, [dispatch]);
    
    return (
      <div>
        <div className={styles.body}></div>
        <div className={styles.blocksContainer}>
        <div className={styles.meditationall}>Dostępne medytacje</div>
          {meditations?.map((meditation, i) => (
            <div className={styles.block} key={i}>
              <div className={styles.leftSide}>
                <img src={woman_main} alt="Meditation" />
              </div>
              <div className={styles.rightSide}>
                <p  className={styles.title}>{meditation.title}</p>
                <p>{meditation.description}</p>
                <div className={styles.buttons}>
                <button
                  style={{
                    backgroundColor:
                      selectedBlock === meditation._id
                        ? savedMeditationIds.includes(meditation._id)
                          ? '#00ff00'
                          : '#6225A0'
                        : '#6225A0',
                  }}
                  onClick={() => {
                    saveMeditation(meditation._id);
                  }}
                >
                  <img src={save} alt="Save" />
                </button>

                <button className={styles.button2} onClick={() => {handleStart(meditation._id)}}>Start</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    
}
