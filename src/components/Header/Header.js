import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import cn from './Header.module.css';
import Navbar from './Navbar/Navbar';
import InnerWidth from '../common/InnerWidth/InnerWidth';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <header className={cn.header}>
        <InnerWidth>
          <div className={cn.header_menu}>
            <HashLink
              to='/#home'
              onClick={() => setShowNav(false)}
              className={cn.logo_link}
            >
              <img className={cn.logo} src='/img/logo.png' alt='logo' />
            </HashLink>
            <button onClick={toggleNav} className={cn.hamburger_menu}>
              {showNav ? (
                <i className='fa-solid fa-xmark' />
              ) : (
                <i className='fa-solid fa-bars' />
              )}
            </button>
          </div>
        </InnerWidth>
      </header>
      <Navbar toggleNav={toggleNav} showNav={showNav}/>
    </>
  );
};

export default Header;
