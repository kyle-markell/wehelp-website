import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
