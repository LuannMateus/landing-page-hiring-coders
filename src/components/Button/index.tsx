import { ButtonHTMLAttributes, FunctionComponent } from 'react';

import styles from './style.module.scss';

type InputProps = ButtonHTMLAttributes<HTMLElement> & {
  themeMode: string;
};

const Button: FunctionComponent<InputProps> = ({
  themeMode,
  children,
  ...props
}) => {
  return (
    <button
      className={
        themeMode === 'LIGHT'
          ? styles.button
          : `${styles.button} ${styles.buttonDark}`
      }
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
