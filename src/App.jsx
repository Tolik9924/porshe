import React, { useState } from 'react';

// components
import Header from './components/common/Header';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/common/Footer';
import Modal from './components/common/Modal';

// styles
import './App.css';

const App = () => {
  const [active, setActive] = useState(false);

  console.log(active);

  return (
    <div>
      <div className="wrap">
        <Header />
        <MainRoutes />
      </div>
      <Modal active={active} setActive={setActive}>
        <div>hi</div>
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
