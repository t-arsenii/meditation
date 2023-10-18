import React from 'react';
import styles from './styles.module.css'; 
import forward from './images/forward.png'
import main_img from './images/main_img.png'
import woman_main from './images/woman_main.png'
import add from './images/add.png'

function Main({ name }) {
  return (
    <div className={styles.body}>
      <div className={styles.oval}></div>
      <div className={styles.main}>
      <div className={styles.sideText}>
        <p>{`Cześć, ${name}`}</p>
        <p className={styles.textNext}>Uczyń swój dzień lepszym</p>

        <div className={styles.program}>
          <p>Rozpocznij 7-dniowy program</p>
          <img src={forward} alt="Forward Icon" className={styles.forward} />
        </div>
        <img src={main_img} alt="Main Image" className={styles.mainImg} />

        <div className={styles.accessible}>
          <p>Dostępne medytacje</p>
          <div className={styles.all}>
            <p>Wszystko</p>
          </div>
        </div>

        <div className={styles.blocksContainer}>
          <div className={styles.block}>
            <img src={woman_main} alt="Woman Main" />
            <p>Medytacja skupiona</p>
          </div>

          <div className={styles.block}>
            <img src="your_image_2.png" alt="Image 2" />
            <p>Текст 2</p>
          </div>

          <div className={styles.block}>
            <img src="your_image_3.png" alt="Image 3" />
            <p>Текст 3</p>
          </div>

          <div className={styles.block}>
            <img src="your_image_4.png" alt="Image 4" />
            <p>Текст 4</p>
          </div>
        </div>
        <div className={styles.accessible2}>
          <p>Zapisane medytacje</p>
          <div className={styles.all2}>
            <p>Wszystko</p>
          </div>
        </div>
        <div className={styles.blocksContainer}>
          <div className={styles.blockAdd}>
            <img src={add} alt="Add Icon" />
          </div>
        </div>
      </div></div>
    </div>
  );
}

export default Main;
