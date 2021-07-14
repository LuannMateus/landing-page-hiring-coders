import { FunctionComponent, InputHTMLAttributes } from 'react';

import styles from './style.module.scss';

type InputProps = InputHTMLAttributes<HTMLElement> & {};

const Input: FunctionComponent<InputProps> = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export { Input };
