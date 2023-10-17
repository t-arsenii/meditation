import React, { useState } from 'react';
import styles from './styles.module.css'; 
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';

function Pytanie1() {
    const [selectedBlock, setSelectedBlock] = useState(null);

    const handleBlockClick = (index) => {
      setSelectedBlock(index);
    };
    const handleNextButtonClick = () => {
        if (selectedBlock !== null) {
          window.location.href = '/endtest';
        } else {
          alert('Zanim przejdziesz dalej, wybierz element.');
        }
      };
    return (
        <div className={styles.body}>
          <div className={styles.oval}></div>
          <div className={styles.centeredContent}>
            <p>Pytanie 3</p>
          </div>
          <div className={styles.content}>
            <p>Jaki jest Twój poziom doświadczenia w medytacji?</p>
          </div>
          <div className={styles.blocks}>
            <div
              className={`${styles.block} ${selectedBlock === 1 ? styles.selected : ''}`}
              data-index="1"
              onClick={() => handleBlockClick(1)}
            >
              <img src={img7} alt="Image 1" />
              <p>Początkujący</p>
            </div>
    
            <div
              className={`${styles.block} ${selectedBlock === 2 ? styles.selected : ''}`}
              data-index="2"
              onClick={() => handleBlockClick(2)}
            >
              <img src={img8} alt="Image 2" />
              <p>Średniozaawansowany</p>
            </div>
            <div
              className={`${styles.block} ${selectedBlock === 3 ? styles.selected : ''}`}
              data-index="3"
              onClick={() => handleBlockClick(3)}
            >
              <img src={img9} alt="Image 3" />
              <p>Zaawansowany</p>
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
