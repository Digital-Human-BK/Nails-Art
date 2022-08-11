import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
