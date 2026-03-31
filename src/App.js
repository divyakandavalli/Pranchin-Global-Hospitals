import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import DoctorsPage from './pages/DoctorsPage';
import Servicespage from './pages/Servicespage';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/doctors' element={<DoctorsPage/>} />
        <Route path='/all-specialities' element={<Servicespage/>} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
