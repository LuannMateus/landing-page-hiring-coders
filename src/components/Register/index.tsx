import { FunctionComponent } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

import styles from './style.module.scss';

const Register: FunctionComponent = () => {
  return (
    <section className={styles.registerBox} id="register">
      <div className={styles.registerInfo}>
        <h2>
          Aqui você encontará as melhores promoções dos mais variados livros
        </h2>
        <h3>Se inscreva! É grátis.</h3>
      </div>

      <div className={styles.inputBlock}>
        <Input type="text" id="name" placeholder="Nome" />
      </div>
      <div className={styles.inputBlock}>
        <Input type="text" id="lastName" placeholder="Sobrenome" />
      </div>

      <div className={styles.inputBlock}>
        <Input type="text" id="email" placeholder="E-mail" />
      </div>

      <Button>Registrar-se</Button>
    </section>
  );
};

export { Register };
