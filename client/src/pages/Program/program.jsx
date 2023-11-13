// Program.js
import React from 'react';
import styles from './styles.module.css';

function Program() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>5-dniowy program</div>

      {/* Додавання блоків */}
      {[1, 2, 3, 4, 5].map((day) => (
        <div key={day} className={styles.block}>
            <div className={styles.innerBlock}>
          {day} dzień
        </div>
        </div>
      ))}
    </div>
  );
}

export default Program;

