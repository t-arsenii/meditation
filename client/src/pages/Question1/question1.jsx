import React, { useState } from 'react';
import styles from './styles.module.css'; 
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

function Pytanie1() {
    const [selectedBlock, setSelectedBlock] = useState(null);

    const handleBlockClick = (index) => {
      setSelectedBlock(index);
    };
    const handleNextButtonClick = () => {
        if (selectedBlock !== null) {
          window.location.href = '/question2';
        } else {
          alert('Zanim przejdziesz dalej, wybierz element.');
        }
      };
    return (
        <div className={styles.body}>
          <div className={styles.oval}></div>
          <div className={styles.centeredContent}>
            <p>Pytanie 1</p>
          </div>
          <div className={styles.content}>
            <p>Jakie są Twoje cele związane z medytacją?</p>
          </div>
          <div className={styles.blocks}>
            <div
              className={`${styles.block} ${selectedBlock === 1 ? styles.selected : ''}`}
              data-index="1"
              onClick={() => handleBlockClick(1)}
            >
              <img src={image1} alt="Image 1" />
              <p>Redukcja stresu</p>
            </div>
    
            <div
              className={`${styles.block} ${selectedBlock === 2 ? styles.selected : ''}`}
              data-index="2"
              onClick={() => handleBlockClick(2)}
            >
              <img src={image2} alt="Image 2" />
              <p>Poprawa zdrowia psychicznego</p>
            </div>
    
            <div
              className={`${styles.block} ${selectedBlock === 3 ? styles.selected : ''}`}
              data-index="3"
              onClick={() => handleBlockClick(3)}
            >
              <img src={image3} alt="Image 3" />
              <p>Koncentracja</p>
            </div>
    
            <div
              className={`${styles.block} ${selectedBlock === 4 ? styles.selected : ''}`}
              data-index="4"
              onClick={() => handleBlockClick(4)}
            >
              <img src={image4} alt="Image 4" />
              <p>Inne</p>
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
