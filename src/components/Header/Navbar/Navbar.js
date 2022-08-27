import { HashLink } from 'react-router-hash-link';

import cn from './Navbar.module.css';

const Navbar = ({toggleNav, showNav}) => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
