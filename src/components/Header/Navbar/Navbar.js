import { HashLink } from 'react-router-hash-link';
import cn from './Navbar.module.css';

const Navbar = ({toggleNav}) => {
  return (
    <nav className={cn.navbar}>
      <ul onClick={toggleNav} className={cn.nav_links}>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#home'}>
            home
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#offer'}>
            offer
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#services'}>
            services
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#about'}>
            about me
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#works'}>
            my works
          </HashLink>
        </li>
        <li className={cn.links_item}>
          <HashLink className={cn.link} to={'/#contacts'}>
            contacts
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
