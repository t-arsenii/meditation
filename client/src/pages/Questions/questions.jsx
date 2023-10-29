import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/img5.png';
import image6 from './images/img6.png';
import image7 from './images/img7.png';
import image8 from './images/img8.png';
import image9 from './images/img9.png';

import { useFetchQuestion } from '../../hooks/FetchQuestion';
export default function Questions({onChecked}) {
  const [selectedBlock, setSelectedBlock] = useState(null);
  
  const [{ isLoading, apiQuestions , serverError }] = useFetchQuestion()
  const handleBlockClick = (index) => {
    setSelectedBlock(index);
   // console.log(index )
   
    onChecked(index);
  };
  function changeImg(){
    
  }
    const imageArray1 = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,

    ];
    const questions  = useSelector(state => state.questions.que[state.questions.trace])

    useEffect(() =>{
     // console.log(questions)
    });
    
  //  if(isLoading) return <h3>isLoading</h3>
  //  if(serverError) return <h3>serverError</h3> 

    return (
        <div className={styles.body}>
            <div className={styles.oval}></div>
            <div className={styles.centeredСontent}>
                {/* <p>Pytanie {questions.id}</p> */}
            </div>
            <div className={styles.content}>
                <p>{questions?.question}</p>
            </div>
            <div className={styles.blocks}>
           
                {
                   questions?.answers.map((q, i) => ( 
                    
                    <div 
                        key={i} 
                        className={`${styles.block} ${selectedBlock === i ? styles.selected : ''}` }
                        onClick={() => {
                          
                          handleBlockClick(i);
                          // Dodaj tutaj swoją dodatkową funkcjonalność onClick
                        }}
                    >
                       <img src={imageArray1[i]} alt={`Image for option ${i}`} />
                        <p className='text-primary'>{q}</p>
                        
                        <div className='check checked'></div>
                    </div>
                  ))
                }
            </div>
            
          </div>
    );
}
