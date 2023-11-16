// Program.js
import React from 'react';
import styles from './styles.module.css';
import { useState, useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrograms, getMyResult } from '../../redux/features/programSlice';
function Program() {
  const dispatch = useDispatch();
  const { programs, userResult } = useSelector((state) => state.program5Day);
  const userId = useSelector((state) => state.auth.user._id);
  const [userFinalProgram, setUserFinalProgram] = useState(null);
  const [programDays, setProgramDays] = useState([]);
  const state = useSelector(state => state)
 
  useEffect(() => {
    dispatch(getPrograms());
    if (userId) {
      dispatch(getMyResult(userId));
    }
  }, [dispatch, userId]);

  const compareResults = () => {
    if (programs.length > 0 && userResult.length > 0) {
      programs.forEach((program) => {
        const programResult = program.result;

        userResult.forEach((userProgram) => {
          const userProgramResult = userProgram.result[0].result;

          const arraysEqual = programResult.every(
            (value, index) => value === userProgramResult[index]
          );

          if (arraysEqual) {
            console.log(`Match found for program: ${program.name}`);
            setUserFinalProgram(program);
            setProgramDays(program.days)
          }
        });
      });
    }
  };

  useEffect(() => {
    compareResults();
  }, [programs, userResult]);
console.log(state)

  return (
    // <div className={styles.container}>
    //   <div className={styles.header}>Twój 5-dniowy program to: {userFinalProgram.name}</div>

    //   {/* Додавання блоків */}
    //   {[1, 2, 3, 4, 5].map((day) => (
    //     <div key={day} className={styles.block}>
    //         <div className={styles.innerBlock}>
    //       {day} dzień
    //     </div>
    //     </div>
    //   ))}

    //     {/* POKAZ Dni */}

    // </div>
    <div className={styles.container}>
      {userFinalProgram ? (
        <div className={styles.header}>
          Twój 5-dniowy program to: {userFinalProgram.name}
        </div>



      ) : (
        <div className={styles.header}>Twój 5-dniowy program to: Brak programu</div>
      )}
 {userFinalProgram && programDays.length > 0 && (
  <>
    {programDays.map((day) => (
      <div key={day.dayId} className={styles.block}>
        <div className={styles.innerBlock}>{day.dayName}</div>
      </div>
    ))}
  </>
)}

</div>
  );
}

export default Program;

