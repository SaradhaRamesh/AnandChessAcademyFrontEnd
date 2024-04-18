import React from 'react';
import Navbar from './components/pages/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { TourProvider } from '../src/components/pages/dropdown/TourContext';
import ContactUs from './components/pages/contact/ContactUs';
import OnGoingTour from './components/pages/dropdown/OnGoingTour';
import RegistrationForm from './components/pages/dropdown/RegistrationForm';
import Main from './components/Home';
import Course from './components/pages/product/Products';
import Footer from './components/Footer/Footer';
import UpcomingTournaments from './components/pages/dropdown/Upcoming';
import CompletedTournament from './components/pages/dropdown/Consulting';
import UserSignup from './components/UserSigup';
import UserLogin from './components/UserLogin';
import AdminSignup from './components/AdminSigup';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/AdminDashBoard/Dashboard';
import ContactDetails from './components/AdminPages/contact/ContactDetails';
import Adminreg from './components/AdminPages/register/AdminReg';
import LoginDetails from './components/AdminPages/login/Logindetails';
import CourseDetails from './components/AdminPages/course/CourseAdmin';



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
        <Route path='/admin/login'element={<AdminLogin/>}/>
        <Route path='/admin/signup'element={<AdminSignup/>}/>
        <Route path='/admin/dashboard'element={<Dashboard/>}/>
        <Route path='/contact/details'element={<ContactDetails/>}/>
        <Route path='/registration/details'element={<Adminreg/>}/>
        <Route path='/course/details'element={<CourseDetails/>}/>
        <Route path='/login/details'element={<LoginDetails/>}/>
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/registration' element={<RegistrationForm />} />
        
      </Routes>
      <Footer/>
    </Router>
    // </TourProvider>
  );
}

export default App;
