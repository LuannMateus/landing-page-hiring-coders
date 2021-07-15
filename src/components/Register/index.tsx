import { FormEvent, FunctionComponent } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

import styles from './style.module.scss';

const Register: FunctionComponent = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const parseForm = event.target as HTMLFormElement;

    const data = new FormData(parseForm);

    const parseData = JSON.stringify({
      name: data.get('name'),
      lastName: data.get('lastName'),
      email: data.get('email'),
    });

    localStorage.setItem('lead', parseData);
  };

  return (
    <section className={styles.registerBox} id="register">
      <div className={styles.registerInfo}>
        <h2>
          Aqui você encontará as melhores promoções dos mais variados livros.
        </h2>
        <h3>Se inscreva! É grátis.</h3>
      </div>

      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <div className={styles.inputBlock}>
          <Input type="text" name="name" id="name" placeholder="Nome" />
        </div>
        <div className={styles.inputBlock}>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Sobrenome"
          />
        </div>

        <div className={styles.inputBlock}>
          <Input type="text" name="email" id="email" placeholder="E-mail" />
        </div>

        <Button type="submit">Registrar-se</Button>
      </form>
    </section>
  );
};

export { Register };
