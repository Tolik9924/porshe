import React, { useState } from 'react';

import Header from './components/common/Header';
import MainRoutes from './routes/MainRoutes';

import './App.css';
import Footer from './components/common/Footer';

const App = () => {
  const [active, setActive] = useState(true);

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
