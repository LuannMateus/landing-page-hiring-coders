import { BooksPromotion } from '../../components/BooksPromotion/Button';
import { Footer } from '../../components/Footer';
import { Register } from '../../components/Register';

import { CgArrowDownO } from 'react-icons/cg';

import styles from './style.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.homeHeader}>
        <h1>Best Book</h1>
      </header>
      <main className={styles.homeMain}>
        <header className={styles.registerHeader}>
          <h2>Registre-se e possua as melhores promoções de livros!</h2>
          <h3>Veja alguns de nossos livros mais vendidos!</h3>
        </header>
        <section className={styles.mainPictures}>
          <img
            src="https://kbimages1-a.akamaihd.net/0c98aac8-b577-4389-8ffb-b5f92cff1692/1200/1200/False/learn-java-12-programming.jpg"
            alt=""
          />

          <img
            src="https://kbimages1-a.akamaihd.net/0c98aac8-b577-4389-8ffb-b5f92cff1692/1200/1200/False/learn-java-12-programming.jpg"
            alt=""
          />
          <img
            src="https://kbimages1-a.akamaihd.net/0c98aac8-b577-4389-8ffb-b5f92cff1692/1200/1200/False/learn-java-12-programming.jpg"
            alt=""
          />

          <img
            src="https://kbimages1-a.akamaihd.net/0c98aac8-b577-4389-8ffb-b5f92cff1692/1200/1200/False/learn-java-12-programming.jpg"
            alt=""
          />

          <img
            src="https://kbimages1-a.akamaihd.net/0c98aac8-b577-4389-8ffb-b5f92cff1692/1200/1200/False/learn-java-12-programming.jpg"
            alt=""
          />
        </section>
        <a href="#register">
          <CgArrowDownO className={styles.mainIcon} />
        </a>
      </main>

      <BooksPromotion />

      <Register />

      <Footer />
    </div>
  );
};

export default Home;
