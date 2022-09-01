import { useNavigate } from 'react-router-dom';

import cn from './NotFound.module.css';

const NotFound = ({ error, hideBtn }) => {
  const navigate = useNavigate();

  const message = error || "Looks like this page doesn't exist.";

  return (
    <section className={cn.not_found}>
      <div className={cn.content}>
        <h2 className={cn.oops}>Oops!</h2>
        <h3 className={cn.message}>{message}</h3>
        {!hideBtn && (
          <button className={cn.home_btn} onClick={() => navigate('/')}>
            Go Home
          </button>
        )}
      </div>
    </section>
  );
};

export default NotFound;
