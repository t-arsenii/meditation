import React from 'react';
import styles from './styles.module.css';
import edit from './images/edit.png';

function Profil() {
  return (
    <div className={styles.bodyBlock}>
     <div className={styles.profil}>Profil</div>
     <div className={styles.infoUser}>
         <div className={styles.imageUser}><p>img</p></div>
         <div className={styles.name}>
          <p >alicja01</p>
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
               <div className={styles.level}>Level</div>
            </div>
            <div className={styles.achievementFinish}>
              <div className={styles.finish}>Ukończone medytacje</div>
            </div>
            </div>
     </div>
     </div>
  );
}

export default Profil;