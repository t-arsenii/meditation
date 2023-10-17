import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Hello from './pages/Hello/hello';
import Registration from './pages/Registration/registration';
import Logging from './pages/Logging/logging';
import {store} from './redux/store';
import {Provider} from 'react-redux';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logging" element={<Logging />} />
      </Routes>
    </Router>
  );
}

export default App;
