import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import cn from './Header.module.css';
import InnerWidth from '../common/InnerWidth/InnerWidth';
import Navbar from './Navbar/Navbar';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <header className={cn.header}>
      <InnerWidth>
        <div className={cn.header_menu}>
          <HashLink to='/#home' onClick={()=> setShowNav(false)} className={cn.logo_link}>
            <img className={cn.logo} src='/img/logo.png' alt='logo' />
          </HashLink>
          <button onClick={toggleNav} className={cn.hamburger_menu}>
            {showNav ? (
              <i className='fa-solid fa-xmark' />
            ) : (
              <i className='fa-solid fa-bars' />
            )}
          </button>
          {showNav && <Navbar toggleNav={toggleNav} />}
        </div>
      </InnerWidth>
    </header>
  );
};

export default Header;
