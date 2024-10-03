import { Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import DashboardContainer from './DashboardContainer';

import '../styles/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Routes>
    </>
  );
}

export default App;
