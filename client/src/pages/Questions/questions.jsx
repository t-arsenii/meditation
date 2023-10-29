import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import questions from '../../database/questions';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
export default function Questions() {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const handleBlockClick = (index) => {
    setSelectedBlock(index);
  };
    const question = questions[0];
    const imageArray = [
      image1,
      image2,
      image3,
      image4,

    ];
    
    useEffect (()=> {
      console.log(questions);
    });
    // function onSelect(){
    //     // setChecked(true);
    //     console.log('radio button change');
    // }

    return (
        <div className={styles.body}>
            <div className={styles.oval}></div>
            <div className={styles.centeredСontent}>
                <p>Pytanie {question.id}</p>
            </div>
            <div className={styles.content}>
                <p>{question.question}</p>
            </div>
            <div className={styles.blocks}>
           
                {
                   question.answers.map((q, i) => (
                    <div 
                        key={i} 
                        className={`${styles.block} ${selectedBlock === i ? styles.selected : ''}`}
                        onClick={() => handleBlockClick(i)}
                    >
                       <img src={imageArray[i]} alt={`Image for option ${i}`} />
                        <p className='text-primary'>{q}</p>
                        
                        <div className='check checked'></div>
                    </div>
                  ))
                }
            </div>
            <div className={styles.centeredButtonContainer}>
                <button className={styles.nextButton}>Next</button>
            </div>
          </div>
    );
}
