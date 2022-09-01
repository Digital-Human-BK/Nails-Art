import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useAuthContext from '../../hooks/useAuthContext';

import cn from './LoginPage.module.css';
import ErrorModal from '../common/ErrorModal/ErrorModal';
import LoadingModal from '../common/LoadingModal/LoadingModal';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim();
    const password = formData.get('pass').trim();
    try {
      setLoading(true);
      await signIn(email, password);
      navigate(location.state?.from?.pathname || '/admin', { replace: true });
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };

  const closeErrorHandler = () => {
    setError(null);
  }

  return (
    <section className={cn.login}>
      {loading && <LoadingModal />}
      {error && <ErrorModal error={error} closeError={closeErrorHandler}/>}
      <h2 className={cn.title}>Please Login</h2>
      <form method='POST' className={cn.login_form} onSubmit={submitHandler}>
        <label className={cn.label}>
          Email
          <input className={cn.input} type='text' name='email' />
        </label>
        <label className={cn.label}>
          Password
          <input className={cn.input} type='password' name='pass' />
        </label>
        <button type='submit' className={cn.submit_btn}>
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
