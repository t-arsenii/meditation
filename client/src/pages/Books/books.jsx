import React from 'react';
import styles from './styles.module.css'; 
import book1 from './images/book1.png';
import star from './images/1.png';
import book2 from './images/book2.png';
import book3 from './images/book3.png';
import book4 from './images/book4.png';
import book5 from './images/book5.png';
import book6 from './images/book6.png';
import { Link } from 'react-router-dom';


function Books() {
  return (
    
    <div className={styles.bodyBlock}>
      <div className={styles.pageHeader}>
        Polecane książki
      </div>
      <div className={styles.books}>
        <div className={styles.book}>
          <img src={book1} alt="Book 1" />
          <div className={styles.contentBook}>
          <Link to="https://lubimyczytac.pl/ksiazka/5017309/czakry-zrodla-energii-praktyczny-poradnik"><h3>Czakry. Źródła energii</h3></Link>
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
          <img src={book2} alt="Book 2" />
          <div className={styles.contentBook}>
            <Link to="https://lubimyczytac.pl/ksiazka/4823036/zycie-piekna-katastrofa-madroscia-ciala-i-umyslu-mozesz-pokonac-stres-choroby-i-bol"><h3>Życie, piękna katastrofa</h3></Link>
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
          <img src={book3} alt="Book 3" />
          <div className={styles.contentBook}>
            <Link to="https://lubimyczytac.pl/ksiazka/212895/praktyka-uwaznosci-dla-poczatkujacych"><h3>Praktyka uważności dla początkujących</h3></Link>
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
          <img src={book4} alt="Book 4" />
          <div className={styles.contentBook}>
            <Link to="https://lubimyczytac.pl/ksiazka/237456/mindfulness-trening-uwaznosci"><h3>Mindfulness. Trening uważności</h3></Link>
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
          <img src={book5} alt="Book 5" />
          <div className={styles.contentBook}>
            <Link to="https://lubimyczytac.pl/ksiazka/198863/medytacja-dzien-po-dniu"><h3>Medytacja dzień po dniu</h3></Link>
            <p>Autor:Christophe André</p>
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
          <img src={book6} alt="Book 6" />
          <div className={styles.contentBook}>
            <Link to="https://lubimyczytac.pl/ksiazka/47433/medytacja-pierwsza-i-ostatnia-wolnosc"><h3>Medytacja. Pierwsza i ostatnia wolność</h3></Link>
            <p>Autor:Osho</p>
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
