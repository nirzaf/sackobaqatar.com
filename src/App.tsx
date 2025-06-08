import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ThemeToggle } from './components/common/ThemeToggle';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { News } from './pages/News';
import { VideoGallery } from './pages/VideoGallery';
import CollegeHistory from './pages/CollegeHistory';
import Exco from './pages/Exco';
import { Contact } from './pages/Contact';
import { Events } from './pages/Events';
import { NotFound } from './pages/NotFound';
import { MembershipTerms } from './pages/MembershipTerms';
import { ScrollToTop } from './components/shared/ScrollToTop';
import { ToastContainer } from './components/common/ToastContainer';

function App() {
  useDarkMode(); // Initialize dark mode

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful:', registration);
          },
          (err) => {
            console.log('ServiceWorker registration failed:', err);
          }
        );
      });
    }
  }, []);
  return (
    <Router>
      <ErrorBoundary>
        <ToastContainer />
        <ScrollToTop />
        <Layout>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<VideoGallery />} />
          <Route path="/history" element={<CollegeHistory />} />
          <Route path="/exco" element={<Exco />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/membership-terms" element={<MembershipTerms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
