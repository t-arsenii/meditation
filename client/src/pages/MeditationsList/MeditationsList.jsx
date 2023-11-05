import React from 'react';
import styles from './styles.module.css';
import { getMeditations } from '../../redux/features/meditationSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect , useState}  from 'react';
import woman_main from './images/woman_main.png'
import { insertSavedMeditations } from '../../redux/features/meditationSlice';
export const MeditationsList = () => {
  const state = useSelector(state => state)
  const {meditations, savedMeditation} = useSelector((state) => state.meditation);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const user = useSelector((state) => state.auth.user._id)
   //selectedBlock = useSelector(state => state.meditation)
  
    const dispatch = useDispatch();
    

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
    const saveMeditation = (index) => {
      onChecked(index);
      try {
        const params = { meditationId:index, userId: user };
        console.log("Params:", params); // Dodaj to, aby sprawdzić wartości params
       // if(savedMeditation && savedMeditation.length <= 3){  /**POprawyty na USE STATE?? */
          dispatch(insertSavedMeditations(params));
       // }else{
       //   console.log("Możesz zapisać tylko 4 medytacji")
       // }
        
        console.log(state);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div>
        <div className={styles.body}></div>
        <div className={styles.blocksContainer}>
          {meditations?.map((meditation, i) => (
            <div className={styles.block} key={i}>
              <div className={styles.leftSide}>
                <img src={woman_main} alt="Meditation" />
              </div>
              <div className={styles.rightSide}>
                <p>{meditation.title}</p>
                <p>{meditation.description}</p>
                <button onClick={() => {
                  saveMeditation(meditation._id);
                  // Dodaj tutaj swoją dodatkową funkcjonalność onClick
                }}>Zapisz</button>
                <button>Przycisk</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    
}
