import React from 'react';
import Navbar from './components/pages/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { TourProvider } from '../src/components/pages/dropdown/TourContext';
import ContactUs from './components/pages/contact/ContactUs';
import Signup from './components/Sigup';
import Login from './components/Login';
import OnGoingTour from './components/pages/dropdown/OnGoingTour';
import RegistrationForm from './components/pages/dropdown/RegistrationForm';
import Main from './components/Home';
import Course from './components/pages/product/Products';
import Footer from './components/Footer/Footer';
import UpcomingTournaments from './components/pages/dropdown/Upcoming';
import CompletedTournament from './components/pages/dropdown/Consulting';

function App() {
  const user = localStorage.getItem("token");
  return (
    // <TourProvider>
    <Router>
      <Navbar />
      
      <Routes>
       
        <Route path='/' element={<Main />} />
        <Route path='/course' element={<Course />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/ongoingtournament' element={<OnGoingTour />} />
        <Route path='/upcomingtournament' element={<UpcomingTournaments/>}/>
        <Route path='/consulting' element={<CompletedTournament />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<RegistrationForm />} />
        
      </Routes>
      <Footer/>
    </Router>
    // </TourProvider>
  );
}

export default App;
