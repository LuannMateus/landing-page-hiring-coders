import { FunctionComponent } from 'react';

import FacebookLogo from '../../assets/img/facebook.svg';
import InstagramLogo from '../../assets/img/instagram.svg';
import GithubLogo from '../../assets/img/github.svg';

import styles from './style.module.scss';
import { animated, useSpring } from 'react-spring';

type FooterProps = {
  themeMode: string;
};

const Footer: FunctionComponent<FooterProps> = ({ themeMode, ...props }) => {
  const animation = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 3 },
    config: { bounce: 1, velocity: 100, duration: 1500 },
  });

  return (
    <footer
      className={
        themeMode === 'LIGHT'
          ? styles.footer
          : `${styles.footer} ${styles.footerDark}`
      }
      {...props}
    >
      <span>
        Created By <strong>@luanmateus</strong>
      </span>
      <section className={styles.footerSocialMedia}>
        <animated.div style={animation} className={styles.footerSocialMedia}>
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
        </animated.div>
      </section>
    </footer>
  );
};

export { Footer };
