import React from 'react';
import styles from './styles.module.css';
import { getMeditations } from '../../redux/features/meditationSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect , useState}  from 'react';
import woman_main from './images/woman_main.png';
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
  const [savedMeditationIds, setSavedMeditationIds] = useState(
    JSON.parse(localStorage.getItem('savedMeditationIds')) || []
  );
  const [selectedMeditationId, setSelectedMeditationId] = useState(
    localStorage.getItem('selectedMeditationId') || null
  );
  useEffect(() => {
    localStorage.setItem('selectedMeditationId', selectedMeditationId);
  }, [selectedMeditationId]);

  useEffect(() => {
    localStorage.setItem('savedMeditationIds', JSON.stringify(savedMeditationIds));
  }, [savedMeditationIds]);

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
      try {
        const params = { meditationId: index, userId: user };
  
        // Dispatch the insertSavedMeditations action
        await dispatch(insertSavedMeditations(params));
  
        // Retrieve the updated savedMeditations after dispatching the insertSavedMeditations action
        const response = await dispatch(getSavedMeditations(user));
  
        if (Array.isArray(response.payload)) {
          // Update the local state with the updated savedMeditations
          setSavedMeditationIds(response.payload.map((m) => m.meditationId));
  
          // Check if the selected meditation is among the saved meditations
          if (savedMeditationIds.includes(index)) {
            // If it is saved, update the selectedMeditationId state
            setSelectedMeditationId(index);
          } else {
            // If it is not saved, reset selectedMeditationId to null (button should be purple)
            setSelectedMeditationId(null);
          }
        } else {
          console.error("Invalid format for saved meditations data:", response);
        }
  
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
    console.log('selectedBlock:', selectedBlock);
console.log('savedMeditationIds:', savedMeditationIds);


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
                      savedMeditationIds.includes(meditation._id)
                        ? '#c44141' // Button is saved
                        : '#471E70', // Default color
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
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
