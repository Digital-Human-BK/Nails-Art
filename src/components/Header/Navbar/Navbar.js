import { HashLink } from 'react-router-hash-link';

import useAuthContext from '../../../hooks/useAuthContext';

import cn from './Navbar.module.css';

const Navbar = ({ toggleNav, showNav }) => {

  const { user, logout } = useAuthContext();

  return (
    <nav className={`${cn.navbar} ${showNav ? cn.active : ''}`}>
      <ul onClick={toggleNav} className={cn.nav_links}>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#home'}>
            НАЧАЛО
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#offer'}>
            ИНФО
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#services'}>
            УСЛУГИ
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#about'}>
            ЗА МЕН
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/catalog'}>
            КАТАЛОГ
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#contacts'}>
            КОНТАКТИ
          </HashLink>
        </li>
        
        {user && <li className={cn.links_item}>
          <button className={cn.logout_btn} onClick={logout}>
            OUT
          </button>
        </li>}
      </ul>
    </nav>
  );
};

export default Navbar;
