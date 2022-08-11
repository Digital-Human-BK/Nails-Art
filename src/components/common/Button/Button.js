import { HashLink } from 'react-router-hash-link';

import cn from './Button.module.css';

const Button = ({children, location, classes }) => {
  return (
    <HashLink to={location} className={`${cn.btn} ${cn[classes]}`}>
      {children}
    </HashLink>
  );
};

export default Button;
