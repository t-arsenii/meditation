import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import questions from '../../database/questions';

export default function Questions() {
    const [checked, setChecked] = useState(undefined);
    const question = questions[0];
    useEffect (()=> {
      console.log(questions);
    });
    function onSelect(){
        // setChecked(true);
        console.log('radio button change');
    }

    return (
        <div className={styles.body}>
            <div className={styles.oval}></div>
            <div className={styles.centeredСontent}>
                <p>Que1</p>
            </div>
            <div className={styles.content}>
                <p>{question.question}</p>
            </div>
            <div className={styles.blocks}>
            <ul className={styles.noDots} key={question.id}>
                {
                   question.answers.map((q, i) => (
                    <li key={i} className={styles.block}>
                    <input
                        type="radio"
                        value={checked}
                        name='options'
                        id={`q${i}--option`}
                        onChange={onSelect} 
                    />
                 
                    <label className='text-primary' htmlFor={`q${i}--option`}>{q}</label>
                    <div className='chek checked'></div>
                </li>
                  ))
                }
            </ul>
            </div>
            <div className={styles.centeredButtonContainer}>
                <button className={styles.nextButton}>Next</button>
            </div>
          </div>
    );
}
