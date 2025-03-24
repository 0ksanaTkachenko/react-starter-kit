import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '@data/routes';
import ScrollToTop from '@components/helpers/scrollToTop';

// import Home from '@pages/Home/Home';
// import About from '@pages/About/About';
// import Services from '@pages/Services/Services';
// import Contact from '@pages/Contact/Contact';
import NotFound from '@pages/notFound/notFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.services} element={<Services />} />
        <Route path={routes.contact} element={<Contact />} /> */}
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
