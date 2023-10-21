import React from 'react';
import styles from './styles.module.css'; 
import book1 from './images/book1.png';
import star from './images/1.png';

function Books() {
  return (
    <div>
      <div className={styles.pageHeader}>
        Polecane książki
      </div>
      <div className={styles.books}>
        <div className={styles.book}>
          <img src={book1} alt="Book 1" />
          <div className={styles.contentBook}>
            <h3>Czakry. Źródła energii. Praktyczny poradnik</h3>
            <p>Autor:Agnieszka Passendorfer</p>
            <div className={styles.stars}>
              <img src={star} alt="1 star" />
              <img src={star} alt="2 star" />
              <img src={star} alt="3 star" />
              <img src={star} alt="4 star" />
              <img src={star} alt="5 star" />
            </div>
          </div>
        </div>
        <div className={styles.book}>
          <img src={book1} alt="Book 2" />
          <div className={styles.contentBook}>
            <h3>Życie, piękna katastrofa</h3>
            <p>Autor:Kabat-Zinn Jon</p>
            <div className={styles.stars}>
              <img src={star} alt="1 star" />
              <img src={star} alt="2 star" />
              <img src={star} alt="3 star" />
              <img src={star} alt="4 star" />
              <img src={star} alt="5 star" />
            </div>
          </div>
        </div>
        <div className={styles.book}>
          <img src={book1} alt="Book 2" />
          <div className={styles.contentBook}>
            <h3>Praktyka uważności dla początkujących</h3>
            <p>Autor:Kabat-Zinn Jon</p>
            <div className={styles.stars}>
              <img src={star} alt="1 star" />
              <img src={star} alt="2 star" />
              <img src={star} alt="3 star" />
              <img src={star} alt="4 star" />
              <img src={star} alt="5 star" />
            </div>
          </div>
        </div>
        <div className={styles.book}>
          <img src={book1} alt="Book 2" />
          <div className={styles.contentBook}>
            <h3>Mindfulness. Trening uważności</h3>
            <p>Autor:Williams Mark Penman Danny</p>
            <div className={styles.stars}>
              <img src={star} alt="1 star" />
              <img src={star} alt="2 star" />
              <img src={star} alt="3 star" />
              <img src={star} alt="4 star" />
              <img src={star} alt="5 star" />
            </div>
          </div>
        </div>
        <div className={styles.book}>
          <img src={book1} alt="Book 2" />
          <div className={styles.contentBook}>
            <h3>Mindfulness. Trening uważności</h3>
            <p>Autor:Williams Mark Penman Danny</p>
            <div className={styles.stars}>
              <img src={star} alt="1 star" />
              <img src={star} alt="2 star" />
              <img src={star} alt="3 star" />
              <img src={star} alt="4 star" />
              <img src={star} alt="5 star" />
            </div>
          </div>
        </div>
        <div className={styles.book}>
          <img src={book1} alt="Book 2" />
          <div className={styles.contentBook}>
            <h3>Mindfulness. Trening uważności</h3>
            <p>Autor:Williams Mark Penman Danny</p>
            <div className={styles.stars}>
              <img src={star} alt="1 star" />
              <img src={star} alt="2 star" />
              <img src={star} alt="3 star" />
              <img src={star} alt="4 star" />
              <img src={star} alt="5 star" />
            </div>
          </div>
        </div>   
      </div>
    </div>
  );
}

export default Books;
