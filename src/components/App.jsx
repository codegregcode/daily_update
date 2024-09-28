import { Routes, Route } from 'react-router-dom';

import Landing from './Landing';

import '../styles/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
