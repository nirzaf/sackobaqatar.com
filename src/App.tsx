import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<VideoGallery />} />
          <Route path="/history" element={<CollegeHistory />} />
          <Route path="/exco" element={<Exco />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
