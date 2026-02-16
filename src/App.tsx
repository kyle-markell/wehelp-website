import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import { LandingPage } from './components/LandingPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Universal Link Landing Pages */}
        <Route path="/:type/:id" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
