import { ChangeEvent, FunctionComponent } from 'react';
import { TextField } from '@material-ui/core';

import styles from './style.module.scss';

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FunctionComponent<InputProps> = ({
  id,
  type,
  placeholder,
  name,
  handleChange,
}) => {
  return (
    <TextField
      id={id}
      label={placeholder}
      variant="filled"
      color="primary"
      type={type}
      name={name}
      onChange={handleChange}
      className={styles.input}
      style={{
        color: '#fff',
      }}
    />
  );
};

export { Input };
