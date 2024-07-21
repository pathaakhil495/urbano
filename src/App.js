import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import InquiryForm from './Components/InquiryForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/inquiry" element={<InquiryForm />} />
    </Routes>
  </Router>
);

export default App;
