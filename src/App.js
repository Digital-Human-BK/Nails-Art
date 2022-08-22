import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
