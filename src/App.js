import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
