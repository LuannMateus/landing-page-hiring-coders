import { ButtonHTMLAttributes, FunctionComponent } from 'react';

import styles from './style.module.scss';

type InputProps = ButtonHTMLAttributes<HTMLElement> & {};

const Button: FunctionComponent<InputProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export { Button };
