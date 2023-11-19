import { useState, useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css';
import edit from './images/edit.png';
import { addUserImage } from '../../redux/features/auth/authSlice';

function Profil() {

  const user = useSelector(state => state.auth.user)
  const userId = useSelector(state => state.auth.user?._id)
  const [image, setImage] = useState("");
  const imageToDisplay = user?.image;
  const dispatch = useDispatch();
  function covertToBase64(e){
  console.log(e)
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = ()  => {
    console.log(reader.result); 
    setImage(reader.result);
  };
  reader.onerror = error => {
    console.log("Error", error);
  }
}
function uploadImage(){
  dispatch(addUserImage({userId , image}))
  console.log("Funkcja img wykonana")
}
  return (
    <div className={styles.bodyBlock}>
     <div className={styles.profil}>Profil</div>
     <div className={styles.infoUser}>
     <label htmlFor="fileInput" className={styles.customFileInput}>
  Wybierz plik
</label>
<input
  id="fileInput"
  accept="image/*"
  type="file"
  onChange={covertToBase64}
  className={styles.inputImg}
/>
            {image =="" || image==null?"":  <img width={100} height={100} src={image}/>}
           <button onClick={uploadImage} className={styles.buttonImage}>Dodaj img</button>

           {imageToDisplay =="" || imageToDisplay==null?"":  <img width={100} height={100} src={imageToDisplay}/>}
         <div className={styles.name}>
          <p>{user?.username }</p>
          <div className={styles.edit}><img  src={edit}/></div>
          </div>
          
     </div>

     <div className={styles.awards}>
          <p>Nagrody</p>
          <div className={styles.blockAwards}>
              <div className={styles.noneAwards}>Nie masz nagród</div>
          </div>
     </div>
     <div className={styles.achievement}>
            <p>Osiągnięcie</p>
            <div className={styles.achievementInfo}>
            <div className={styles.achievementLevel}>
               <div className={styles.level}>{user?.level}</div>
            </div>
            <div className={styles.achievementFinish}>
              <div className={styles.finish}>{user?.finishedMeditations}</div>
            </div>
            </div>
     </div>
     </div>
  );
}

export default Profil;