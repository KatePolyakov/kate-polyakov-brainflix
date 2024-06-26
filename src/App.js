import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { UploadPage } from './pages/UploadPage/UploadPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import './App.scss';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video-player/:videoId" element={<HomePage />} />
          <Route path="/video-upload" element={<UploadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
