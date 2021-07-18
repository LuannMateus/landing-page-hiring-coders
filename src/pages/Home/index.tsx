import { Fragment, useState, FunctionComponent } from 'react';
import { useSpring, animated } from 'react-spring';
import { Switch } from '@material-ui/core';

import { BooksPromotion } from '../../components/BooksPromotion/Button';
import { Footer } from '../../components/Footer';
import { Register } from '../../components/Register';

import { CgArrowDownO } from 'react-icons/cg';
import { FaMoon, FaSun } from 'react-icons/fa';

import Logo from '../../assets/img/logo.svg';
import LogoDark from '../../assets/img/logoDark.svg';
import Book from '../../assets/img/book.png';

import styles from './style.module.scss';
import { useEffect } from 'react';

type HomeProps = {
  theme: () => string;
};

const Home: FunctionComponent<HomeProps> = ({ theme }) => {
  const animation = useSpring({
    from: { opacity: 0, marginLeft: -5000 },
    to: { opacity: 1, marginLeft: 0 },
    config: { bounce: 1, velocity: 100, duration: 800 },
  });

  const [themeMode, setThemeMode] = useState('LIGHT');

  useEffect(() => {
    const actualTheme = localStorage.getItem('theme');

    if (actualTheme) {
      setThemeMode(actualTheme);
    }
  }, [themeMode]);

  const books = [
    {
      title: 'Test-Driven-Development',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL.jpg',
    },
    {
      title: 'Python Programming',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/41z1V0zP2WL.jpg',
    },
    {
      title: 'Domain Driven Design',
      imageURL: 'https://m.media-amazon.com/images/I/51OWGtzQLLL.jpg',
    },
    {
      title: 'Padrões de Projeto',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/51bO3rI8hEL._SX348_BO1,204,203,200_.jpg',
    },
    {
      title: 'Código Limpo',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg',
    },
  ];

  const renderBooks = () => {
    return books.map((book, index) => {
      return (
        <Fragment key={`book_${index}`}>
          <img src={book.imageURL} alt={book.title} />
        </Fragment>
      );
    });
  };

  const handleTheme = () => {
    const actualTheme = theme();

    setThemeMode(actualTheme);

    localStorage.setItem('theme', actualTheme);
  };

  return (
    <div className={styles.container}>
      <header
        className={
          themeMode === 'LIGHT'
            ? styles.homeHeader
            : `${styles.homeHeader} ${styles.homeHeaderDark}`
        }
      >
        <section>
          {themeMode === 'LIGHT' ? (
            <img src={Logo} alt="Logo" onClick={handleTheme} />
          ) : (
            <img src={LogoDark} alt="Logo" onClick={handleTheme} />
          )}
          <h1>Best Book</h1>
        </section>

        <section>
          {themeMode === 'LIGHT' ? (
            <FaSun className={styles.sunIcon} />
          ) : (
            <FaMoon className={styles.moonIcon} />
          )}

          <Switch
            className={styles.toggleButton}
            onClick={handleTheme}
            color="primary"
            checked={themeMode !== 'LIGHT'}
          />
        </section>
      </header>
      <main
        className={
          themeMode === 'LIGHT'
            ? styles.homeMain
            : `${styles.homeMain} ${styles.homeMainDark}`
        }
      >
        <section className={styles.mainHeader}>
          <h2>Registre-se e possua as melhores promoções de livros!</h2>
          <img src={Book} alt="Book" />
          <h3>Veja alguns de nossos livros mais vendidos.</h3>
        </section>

        <section className={styles.mainPictures}>
          <animated.div
            style={{ ...animation }}
            className={styles.mainPictures}
          >
            {renderBooks()}
          </animated.div>
        </section>
        <a href="#register">
          <CgArrowDownO className={styles.mainIcon} />
        </a>
      </main>

      <BooksPromotion themeMode={themeMode} />

      <Register themeMode={themeMode} />

      <Footer themeMode={themeMode} />
    </div>
  );
};

export default Home;
