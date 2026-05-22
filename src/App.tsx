import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import AboutUs from './pages/AboutUs';
import AboutCentre from './pages/AboutCentre';
import KnowDoctors from './pages/KnowDoctors';
import Store from './pages/Store';
import News from './pages/News';
import Announcements from './pages/Announcements';
import VideoGallery from './pages/VideoGallery';
import ContactUs from './pages/ContactUs';
import DoshaQuiz from './pages/DoshaQuiz';
import SymptomChecker from './pages/SymptomChecker';
import HerbGlossary from './pages/HerbGlossary';
import TreatmentJourney from './pages/TreatmentJourney';
import LifestyleTips from './pages/LifestyleTips';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ErrorPage from './pages/ErrorPage';
import ScrollToTop from './components/ScrollToTop';
import GoogleAnalytics from './components/GoogleAnalytics';
import ErrorBoundary from './components/ErrorBoundary';

import ConditionPage from './pages/conditions/ConditionPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <GoogleAnalytics />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="treatments/journey" element={<TreatmentJourney />} />
            <Route path="conditions/:slug" element={<ConditionPage />} />
            <Route path="dosha-quiz" element={<DoshaQuiz />} />
            <Route path="symptom-navigator" element={<SymptomChecker />} />
            <Route path="herb-glossary" element={<HerbGlossary />} />
            <Route path="about">
              <Route index element={<AboutUs />} />
              <Route path="centre" element={<AboutCentre />} />
              <Route path="doctors" element={<KnowDoctors />} />
            </Route>
            <Route path="store" element={<Store />} />
            <Route path="news" element={<News />} />
            <Route path="videos" element={<VideoGallery />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="lifestyle-tips" element={<LifestyleTips />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            
            {/* 404 Route */}
            <Route path="*" element={<ErrorPage is404={true} />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
