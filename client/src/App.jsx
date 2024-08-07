// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Courses from './Components/Courses';
import LearningPage from './Components/Learning';
import LearnBasicFrench from './Components/Basic-French';
import LearnBasicHindi from './Components/Basic-Hindi';
import LearnBasicPortuguese from './Components/Basic-Portuguese';
import FrenchQuiz from './Components/French-Quiz';
import HindiQuiz from './Components/Hindi-Quiz';
import PortugueseQuiz from './Components/Portugese-Quiz';
import Footer from './Components/Footer';
import LoginPage from './Components/Login';
import FAQAndHelp from './Components/Feedback';
import TermsAndConditions from './Components/Terms';
import PrivacyPolicy from './Components/Privacy';
import ReviewPage from './Components/Review';
import SignupPage from './Components/Sign';
import AboutUs from './Components/About';
import Testimonial from './Components/Testimonial';
import ProfilePage from './Components/ProfilePage';
import { UserProvider } from './Components/UserContext';

function App() {
  const location = useLocation();

  // Define the routes where Navbar and Footer should not be displayed
  const noNavFooterRoutes = ['/Login', '/Sign'];

  const shouldDisplayNavbar = !noNavFooterRoutes.includes(location.pathname);
  const shouldDisplayFooter = !noNavFooterRoutes.includes(location.pathname);

  return (
    <div>
      {shouldDisplayNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Sign' element={<SignupPage />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/learning/:language' element={<LearningPage />} />
        <Route path='/basic-french' element={<LearnBasicFrench />} />
        <Route path='/basic-hindi' element={<LearnBasicHindi />} />
        <Route path='/basic-portuguese' element={<LearnBasicPortuguese />} />
        <Route path='/french-quiz' element={<FrenchQuiz />} />
        <Route path='/hindi-quiz' element={<HindiQuiz />} />
        <Route path='/portuguese-quiz' element={<PortugueseQuiz />} />
        <Route path='/feedback' element={<FAQAndHelp />} />
        <Route path='/terms' element={<TermsAndConditions />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/review' element={<ReviewPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/testimonials' element={<Testimonial />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      {shouldDisplayFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  );
}

export default AppWrapper;
