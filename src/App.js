import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import DoctorsPage from './pages/DoctorsPage';
import Servicespage from './pages/Servicespage';
import SingleService from './pages/SingleService';
import ContactUs from './pages/ContactUs';
import CareersPage from './pages/CareersPage';
import HealthPackagesPage from './pages/HealthPackagesPage';
import DoctorDetails from './components/Doctors/DoctorDetails';
import BlogPages from './pages/BlogPages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/doctors' element={<DoctorsPage />} />
        <Route path='/doctors-profile' element={<DoctorDetails/>} />
        <Route path='/all-specialities' element={<Servicespage />} />
        <Route path='/specialities/:slug' element={<SingleService />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/careers' element={<CareersPage />} />
        <Route path='/blogs' element={<BlogPages />} />
        <Route path='/health-packages' element={<HealthPackagesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
