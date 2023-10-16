import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './pages/Homepage/homepage';
import Hello from './pages/Hello/hello'
import Registration from './pages/Registration/registration';

function App() {
  return (
    <Router>
      <Routes> {}
        <Route path="/" element={<MyComponent />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
