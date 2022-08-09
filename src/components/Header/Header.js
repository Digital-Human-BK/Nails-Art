import { HashLink } from 'react-router-hash-link';

import cn from './Header.module.css';
import InnerWidth from '../common/InnerWidth/InnerWidth';

const Header = () => {
  return (
    <header className={cn.header}>
      <InnerWidth>
        <div className={cn.header_menu}>
          <HashLink to='/' className={cn.logo_link}>
            <img
              className={cn.logo}
              src='/img/logo.png'
              alt='logo'
            />
          </HashLink>
          <div className={cn.hamburger_menu}>MENU</div>
        </div>
      </InnerWidth>
    </header>
  );
};

export default Header;
