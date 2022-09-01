import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';

import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import CatalogPage from './components/CatalogPage/CatalogPage';
import AdminPage from './components/AdminPage/AdminPage';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/common/RequireAuth/RequireAuth';
import LoginPage from './components/LoginPage/LoginPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <AuthProvider>

      <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/catalog' element={<CatalogPage />} />

          <Route element={<RequireAuth />}>
            <Route path='/admin' element={<AdminPage />} />
          </Route>

          <Route path='*' element={<NotFound/>} />
        </Routes>
      </AuthProvider>

      <Footer />
    </>
  );
}

export default App;
