import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../../../hooks/useAuthContext';

const RequireAuth = () => {
  const location = useLocation();
  const { user } = useAuthContext();
  return (user.email 
    ? <Outlet />
    : <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
