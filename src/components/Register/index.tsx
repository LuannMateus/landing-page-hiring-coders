import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Input } from '../Input';
import { Button } from '../Button';

import styles from './style.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Register: FunctionComponent = () => {
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const notify = () => toast.success('Registro feito com sucesso 😁');

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

    notify();
  };

  return (
    <section className={styles.registerBox} id="register">
      <ToastContainer />
      <div className={styles.registerInfo}>
        <h2>
          Aqui você encontará as melhores promoções dos mais variados livros.
        </h2>
        <h3>Se inscreva! É grátis.</h3>
      </div>
      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <div className={styles.inputBlock}>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
        </div>
        <div className={styles.inputBlock}>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Sobrenome"
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              setLastName(event.target.value)
            }
          />
        </div>

        <div className={styles.inputBlock}>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
        </div>

        <Button type="submit" disabled={!(name && lastName && email)}>
          Registrar-se
        </Button>
      </form>
    </section>
  );
};

export { Register };
