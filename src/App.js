import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadVideo from "./pages/UploadPage/UploadPage";
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload/" element={<UploadVideo />} />
          <Route path="/video/:videoId" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
















