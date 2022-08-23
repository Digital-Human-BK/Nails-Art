import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import CatalogPage from './components/CatalogPage/CatalogPage';
import AdminPage from './components/AdminPage/AdminPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
