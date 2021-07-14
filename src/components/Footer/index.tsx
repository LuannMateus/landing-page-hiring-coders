import { FunctionComponent } from 'react';

import styles from './style.module.scss';

type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = ({ ...props }) => {
  return (
    <footer className={styles.footer} {...props}>
      <span>Created By @Luan Mateus</span>
    </footer>
  );
};

export { Footer };
