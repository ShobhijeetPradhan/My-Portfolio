import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Analytics } from "@vercel/analytics/next"

import WelcomeScreen from './pages/WelcomeScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AnimatedBackground from './components/Background';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; // Our fallback for Suspense
import { useMediaQuery } from './hooks/useMediaQuery'; // Assuming you have this hook

const ProjectDetails = lazy(() => import('./components/ProjectDetail'));
const ThankYouPage = lazy(() => import('./pages/ThankYou')); 
const NotFoundPage = lazy(() => import('./pages/404'));


function MainLayout() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <main className="text-white relative z-0">
      {isDesktop && <AnimatedBackground />}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </main>
  );
}


function App() {
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);

  const handleWelcomeComplete = () => {
    setIsWelcomeComplete(true);
  };

  if (!isWelcomeComplete) {
    return <WelcomeScreen onLoadingComplete={handleWelcomeComplete} />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/thank-you" element={<ThankYouPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

