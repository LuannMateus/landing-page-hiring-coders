import { FunctionComponent } from 'react';

import FacebookLogo from '../../assets/img/facebook.svg';
import InstagramLogo from '../../assets/img/instagram.svg';
import GithubLogo from '../../assets/img/github.svg';

import styles from './style.module.scss';

type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = ({ ...props }) => {
  return (
    <footer className={styles.footer} {...props}>
      <span>
        Created By <strong>@LuanMateus</strong>
      </span>
      <section className={styles.footerSocialMedia}>
        <a href="/">
          <img
            src={FacebookLogo}
            alt="Facebbok Logo"
            aria-label="Facebbok Logo"
          />
        </a>

        <a href="/">
          <img
            src={InstagramLogo}
            alt="Facebbok Logo"
            aria-label="Facebbok Logo"
          />
        </a>

        <a href="/">
          <img
            src={GithubLogo}
            alt="Facebbok Logo"
            aria-label="Facebbok Logo"
          />
        </a>
      </section>
    </footer>
  );
};

export { Footer };
