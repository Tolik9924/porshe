import React, { useState } from 'react';

// components
import Header from './components/common/Header';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/common/Footer';

// styles
import './App.css';

const App = () => {
  return (
    <div>
      <div className="wrap">
        <Header />
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
