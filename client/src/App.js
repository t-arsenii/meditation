
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './pages/Homepage/homepage';
import Hello from './pages/Hello/hello'

function App() {
  return (
    <Router>
      <Routes> {}
        <Route path="/" element={<MyComponent />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  );
}

export default App;
