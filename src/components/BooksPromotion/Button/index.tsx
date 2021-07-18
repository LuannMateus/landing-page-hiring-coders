import styles from './style.module.scss';

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';
import { FunctionComponent } from 'react';

type BooksPromotionProps = {
  themeMode: string;
};

const BooksPromotion: FunctionComponent<BooksPromotionProps> = ({
  themeMode,
}) => {
  const books = [
    {
      title: 'Test Driven Development',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL.jpg',
      price: 296.44,
    },
    {
      title: 'Python Programming',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/41z1V0zP2WL.jpg',
      price: 101.08,
    },
    {
      title: 'Domain Driven Design',
      imageURL: 'https://m.media-amazon.com/images/I/51OWGtzQLLL.jpg',
      price: 470.99,
    },
    {
      title: 'Padrões de Projeto',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/51bO3rI8hEL._SX348_BO1,204,203,200_.jpg',
      price: 402.96,
    },
  ];

  const renderBooks = () => {
    return books.map((book, index) => {
      const bookDiscount = (book.price - book.price * 0.2)
        .toFixed(2)
        .replace('.', ',');

      return (
        <Card className={styles.card} key={`book_${book.title}_${index}`}>
          <CardActionArea>
            <CardMedia className={styles.cardImage} image={book.imageURL} />
            <CardContent className={styles.cardContent}>
              <h2>{book.title}</h2>

              <p>
                <span> De R$ {book.price}</span> <br /> POR <br />{' '}
                <strong>R$ {bookDiscount}</strong>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });
  };

  return (
    <div
      className={
        themeMode === 'LIGHT'
          ? styles.booksSection
          : `${styles.booksSection} ${styles.booksSectionDark}`
      }
    >
      <h2>ALGUMAS PROMOÇÕES</h2>

      <div className={styles.booksBlock}>{renderBooks()}</div>
    </div>
  );
};

export { BooksPromotion };
