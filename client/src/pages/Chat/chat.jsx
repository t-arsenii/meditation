import { useState, useEffect }  from 'react'
import styles from './styles.module.css';
import Search from './images/Search.png';

function Profil() {

  return (
    <div className={styles.bodyBlock}>
    <div className={styles.chat}><p>Czat</p></div>

    <div className={styles.searchApp}>
    <div className={styles.searchContainer}>
          <img src={Search} alt="Search" className={styles.searchIcon} />
          <input
  type="text"
  placeholder="Wyszukaj osób"
  className={styles.searchInput}
/>

        </div></div>

        <div className={styles.noneSMS}>Brak powiadomień</div>

        <div className={styles.userSMS}>
        <div className={styles.userBlock}>
                 <div className={styles.userImg}>
                       img
                 </div>
                 <div className={styles.userInfo}>
                 <div className={styles.userName}>
                        Alicja01
                 </div>
                 <div className={styles.userEndSMS}>
                        Cześć
                 </div></div>
                 <div className={styles.smsData}>
                       <p>12:00 2 dni temu</p>
                       
                 </div>
            </div>
        </div>
    </div>
  );
}

export default Profil;