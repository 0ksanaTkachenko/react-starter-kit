import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '@data/routes';

import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Services from '@pages/Services/Services';
import Contact from '@pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.services} element={<Services />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
