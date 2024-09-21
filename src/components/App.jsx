import { Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import ForgotPW from './ForgotPW';

import '../styles/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPW />} />
      </Routes>
    </>
  );
}

export default App;
