import styles from './style.module.scss';

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';

const BooksPromotion = () => {
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
  ];

  const renderBooks = () => {
    return books.map((book, index) => {
      return (
        <Card className={styles.card} key={`book_${book.title}_${index}`}>
          <CardActionArea>
            <CardMedia className={styles.cardImage} image={book.imageURL} />
            <CardContent className={styles.cardContent}>
              <h2>{book.title}</h2>

              <p>
                <span>De 122,90</span> <br /> POR <br />{' '}
                <strong>R$ 100,0</strong>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });
  };

  return (
    <div className={styles.booksSection}>
      <h2>ALGUMAS PROMOÇÕES</h2>

      <div className={styles.booksBlock}>{renderBooks()}</div>
    </div>
  );
};

export { BooksPromotion };
