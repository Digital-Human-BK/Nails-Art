import cn from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={cn.footer}>
      &copy; 2022 |{' '}
      <a
        className={cn.dev}
        href='https://www.linkedin.com/in/biser-karadzhov-b03594238/'
        target='_blank'
        rel='noreferrer'
      >
        Biser Karadzhov
      </a>
    </footer>
  );
};

export default Footer;
