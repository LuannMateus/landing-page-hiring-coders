import styles from './style.module.scss';

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';

const BooksPromotion = () => {
  return (
    <div className={styles.booksSection}>
      <h2>ALGUMAS PROMOÇÕES</h2>

      <div className={styles.booksBlock}>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.cardImage}
              image="https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg"
            />
            <CardContent className={styles.cardContent}>
              <p>
                <span>De 122,90</span> <br /> por <br />
                <strong>R$ 100,0</strong>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.cardImage}
              image="https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg"
            />
            <CardContent className={styles.cardContent}>
              <p>
                <span>De 122,90</span> <br /> por <br />
                <strong>R$ 100,0</strong>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.cardImage}
              image="https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg"
            />
            <CardContent className={styles.cardContent}>
              <p>
                <span>De 122,90</span> <br /> por <br />
                <strong>R$ 100,0</strong>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.cardImage}
              image="https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg"
            />
            <CardContent className={styles.cardContent}>
              <p>
                <span>De 122,90</span> <br /> por <br />
                <strong>R$ 100,0</strong>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export { BooksPromotion };
