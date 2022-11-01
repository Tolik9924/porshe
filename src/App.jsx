import React, {useState} from 'react';

import Header from './components/common/Header';
import MainRoutes from './routes/MainRoutes';

import './App.css';

const App = () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      <Header />
      <MainRoutes />
    </div>
  );
}

export default App;
