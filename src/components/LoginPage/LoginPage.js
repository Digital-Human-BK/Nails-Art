import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase-config';
import useAuthContext from '../../hooks/useAuthContext';

import cn from './LoginPage.module.css';
import LoadingModal from '../common/LoadingModal/LoadingModal';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { onAuth } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim();
    const password = formData.get('pass').trim();
    try {
      setLoading(true);
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      onAuth(credentials.user);
      console.log(credentials.user);
      navigate(location.state?.from?.pathname, { replace: true });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={cn.login}>
      {loading && <LoadingModal />}
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
