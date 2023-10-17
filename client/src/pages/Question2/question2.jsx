import React, { useState } from 'react';
import styles from './styles.module.css'; 
import img5 from './images/img5.png';
import img6 from './images/img6.png';


function Pytanie1() {
    const [selectedBlock, setSelectedBlock] = useState(null);

    const handleBlockClick = (index) => {
      setSelectedBlock(index);
    };
    const handleNextButtonClick = () => {
        if (selectedBlock !== null) {
          window.location.href = 'pytanie2.html';
        } else {
          alert('Zanim przejdziesz dalej, wybierz element.');
        }
      };
    return (
        <div className={styles.body}>
          <div className={styles.oval}></div>
          <div className={styles.centeredContent}>
            <p>Pytanie 2</p>
          </div>
          <div className={styles.content}>
            <p>Czy preferujesz medytację dynamiczną czy statyczną?</p>
          </div>
          <div className={styles.blocks}>
            <div
              className={`${styles.block} ${selectedBlock === 1 ? styles.selected : ''}`}
              data-index="1"
              onClick={() => handleBlockClick(1)}
            >
              <img src={img5} alt="Image 1" />
              <p>Statyczna</p>
            </div>
    
            <div
              className={`${styles.block} ${selectedBlock === 2 ? styles.selected : ''}`}
              data-index="2"
              onClick={() => handleBlockClick(2)}
            >
              <img src={img6} alt="Image 2" />
              <p>Dynamiczna</p>
            </div>
       </div>
          <div className={styles.centeredButtonContainer}>
        <button
          className={styles.nextButton}
          onClick={handleNextButtonClick}
        >
          Dalej
        </button>
      </div>
        </div>
      );
}

export default Pytanie1;
