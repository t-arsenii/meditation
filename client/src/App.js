import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Hello from './pages/Hello/hello';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  );
}

export default App;
